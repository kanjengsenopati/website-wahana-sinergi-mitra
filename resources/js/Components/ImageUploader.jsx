import React, { useState, useRef, useEffect } from 'react';
import { usePage } from '@inertiajs/react';
import { UploadCloud, Image as ImageIcon, X, RefreshCw, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import {
  DEFAULT_PROJECT_PLACEHOLDER,
  DEFAULT_AVATAR_PLACEHOLDER,
  resolveImageUrl,
  isSupportedImageFile,
  getFreshCsrfHeaders,
  compressImageIfNeeded,
  formatFileSize,
} from '../utils/imageUtils';

/**
 * ImageUploader Component
 * Pure local file upload with Drag-and-Drop (both empty & preview states),
 * client-side Canvas auto-compression/resizing, and Inertia-safe fresh CSRF handling.
 * Conforms strictly to PakRT Rules: tight kerning, darker gray contrast, rounded-2xl containers.
 */
export default function ImageUploader({
  value,
  onChange,
  onUploadingChange,
  folder = 'general',
  aspect = 'landscape', // 'landscape' | 'avatar'
  className = '',
}) {
  const { csrf_token: pageCsrfToken, upload_limits: uploadLimits } = usePage().props || {};

  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStage, setUploadStage] = useState(''); // 'compressing' | 'uploading' | ''
  const [optimizationNote, setOptimizationNote] = useState(null);
  const [uploadError, setUploadError] = useState(null);
  const [imgLoadFailed, setImgLoadFailed] = useState(false);

  const fileInputRef = useRef(null);
  const onUploadingChangeRef = useRef(onUploadingChange);
  const wasUploadingRef = useRef(false);

  useEffect(() => {
    onUploadingChangeRef.current = onUploadingChange;
  }, [onUploadingChange]);

  // Reset broken-image state whenever value changes so new uploads always render freshly
  useEffect(() => {
    setImgLoadFailed(false);
  }, [value]);

  // Notify parent when upload state toggles, and guarantee cleanup on unmount
  useEffect(() => {
    if (wasUploadingRef.current !== isUploading) {
      wasUploadingRef.current = isUploading;
      onUploadingChangeRef.current?.(isUploading);
    }
  }, [isUploading]);

  useEffect(() => {
    return () => {
      if (wasUploadingRef.current) {
        wasUploadingRef.current = false;
        onUploadingChangeRef.current?.(false);
      }
    };
  }, []);

  const fallbackImg = aspect === 'avatar' ? DEFAULT_AVATAR_PLACEHOLDER : DEFAULT_PROJECT_PLACEHOLDER;
  const resolvedPreviewSrc = imgLoadFailed ? fallbackImg : resolveImageUrl(value, fallbackImg);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isUploading) {
      setIsDragging(true);
    }
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (isUploading) return;

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      uploadFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      uploadFile(e.target.files[0]);
    }
  };

  const uploadFile = async (rawFile) => {
    if (!isSupportedImageFile(rawFile)) {
      setUploadError('Format file tidak didukung. Harap pilih gambar bertipe JPG, PNG, WebP, atau AVIF.');
      return;
    }

    // Reject extreme files (> 25 MB) before attempting browser canvas decode
    const hardClientMax = 25 * 1024 * 1024;
    if (rawFile.size > hardClientMax) {
      setUploadError('Ukuran file mentah terlalu besar (melebihi 25 MB). Harap pilih file yang lebih kecil.');
      return;
    }

    setUploadError(null);
    setOptimizationNote(null);
    setIsUploading(true);
    setUploadStage('compressing');

    try {
      const phpMaxBytes = uploadLimits?.php_max_bytes || 2 * 1024 * 1024;
      const serverMaxBytes = (uploadLimits?.max_kb || 5120) * 1024;
      const effectiveServerLimit = Math.min(phpMaxBytes, serverMaxBytes);
      // Aim safely below PHP's upload_max_filesize (e.g., 1.5 MB when PHP limit is 2 MB)
      const targetCompressBytes = Math.min(1.5 * 1024 * 1024, Math.floor(effectiveServerLimit * 0.8));

      const { file: fileToUpload, wasCompressed, originalSize, compressedSize } =
        await compressImageIfNeeded(rawFile, {
          maxDimension: aspect === 'avatar' ? 800 : 1920,
          targetMaxBytes: targetCompressBytes,
        });

      if (fileToUpload.size > serverMaxBytes) {
        setUploadError('Ukuran file setelah optimasi masih melebihi batas maksimal 5 MB.');
        return;
      }

      if (fileToUpload.size > phpMaxBytes) {
        const limitLabel = formatFileSize(phpMaxBytes);
        setUploadError(
          `Ukuran file (${formatFileSize(fileToUpload.size)}) masih melebihi batas upload server (${limitLabel}). Harap gunakan gambar yang lebih kecil.`
        );
        return;
      }

      setUploadStage('uploading');

      const formData = new FormData();
      formData.append('image', fileToUpload);
      formData.append('folder', folder);

      const response = await fetch('/admin/upload', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          ...getFreshCsrfHeaders(pageCsrfToken),
          Accept: 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
        body: formData,
      });

      const rawText = await response.text();
      let data = null;
      try {
        data = rawText ? JSON.parse(rawText) : null;
      } catch {
        data = null;
      }

      if (response.ok && data?.success && data?.url) {
        setImgLoadFailed(false);
        onChange(data.url);
        if (wasCompressed && originalSize && compressedSize) {
          setOptimizationNote(`Dioptimalkan otomatis: ${formatFileSize(originalSize)} → ${formatFileSize(compressedSize)}`);
        }
      } else if (response.status === 419) {
        setUploadError('Sesi keamanan (CSRF) telah berakhir. Silakan muat ulang halaman lalu unggah kembali.');
      } else if (response.status === 413) {
        setUploadError('Ukuran file ditolak oleh server (HTTP 413). Harap pilih gambar berukuran lebih kecil.');
      } else if (response.status === 401 || response.status === 403) {
        setUploadError('Sesi login Anda tidak valid atau telah habis. Silakan masuk kembali ke panel admin.');
      } else {
        const firstValidationError = data?.errors?.image?.[0] || data?.errors?.folder?.[0];
        setUploadError(
          firstValidationError ||
            data?.message ||
            `Gagal mengunggah gambar (HTTP ${response.status}). Silakan coba lagi.`
        );
      }
    } catch {
      setUploadError('Terjadi kendala koneksi ke server saat mengunggah file. Periksa jaringan Anda dan coba lagi.');
    } finally {
      setIsUploading(false);
      setUploadStage('');
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleRemove = (e) => {
    e.stopPropagation();
    onChange('');
    setUploadError(null);
    setOptimizationNote(null);
    setImgLoadFailed(false);
  };

  return (
    <div className={`space-y-2 ${className}`}>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/avif,.jpg,.jpeg,.png,.webp,.avif"
        onChange={handleFileChange}
        className="hidden"
      />

      {/* If Image exists, show preview card (also supports Drag-and-Drop replacement) */}
      {value ? (
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`relative rounded-2xl p-3 sm:p-4 transition-all border ${
            isDragging
              ? 'border-sky-500 bg-sky-50/70 ring-4 ring-sky-500/10'
              : 'bg-slate-50 border-slate-200'
          }`}
        >
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* Image Preview Container */}
            <div
              className={`relative overflow-hidden shrink-0 bg-slate-200 border border-slate-300/80 shadow-xs ${
                aspect === 'avatar' ? 'w-16 h-16 rounded-full' : 'w-full sm:w-36 h-28 sm:h-22 rounded-xl'
              }`}
            >
              <img
                key={resolvedPreviewSrc}
                src={resolvedPreviewSrc}
                alt="Uploaded Preview"
                className="w-full h-full object-cover"
                onError={() => setImgLoadFailed(true)}
              />
              {isUploading && (
                <div className="absolute inset-0 bg-slate-900/65 backdrop-blur-xs flex flex-col items-center justify-center text-white gap-1 px-2 text-center">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span className="text-[10px] font-bold tracking-[-0.015em]">
                    {uploadStage === 'compressing' ? 'Optimasi...' : 'Mengunggah...'}
                  </span>
                </div>
              )}
            </div>

            {/* Info & Action Controls */}
            <div className="flex-1 min-w-0 text-center sm:text-left space-y-1">
              <div className="flex items-center justify-center sm:justify-start gap-1.5 text-emerald-700 text-xs font-bold tracking-[-0.015em]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="truncate">
                  {isDragging ? 'Lepas file untuk mengganti foto' : 'File Foto Siap Digunakan'}
                </span>
              </div>
              <p className="text-[11px] font-mono text-slate-600 truncate" title={value}>
                {value.startsWith('/storage') || value.startsWith('uploads/') ? value : 'Gambar Tersimpan'}
              </p>
              <p className="text-[11px] text-slate-600 tracking-[-0.015em]">
                {optimizationNote ? (
                  <span className="font-semibold text-emerald-700">{optimizationNote}</span>
                ) : (
                  <>
                    Seret foto baru ke kotak ini atau klik <span className="font-semibold text-slate-700">Ganti File Foto</span>
                  </>
                )}
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <button
                  type="button"
                  disabled={isUploading}
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-50 hover:bg-sky-100 disabled:opacity-50 text-sky-700 text-xs font-bold tracking-[-0.015em] transition-colors cursor-pointer"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isUploading ? 'animate-spin' : ''}`} />
                  <span>{isUploading ? 'Memproses...' : 'Ganti File Foto'}</span>
                </button>
                <button
                  type="button"
                  disabled={isUploading}
                  onClick={handleRemove}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 disabled:opacity-50 text-rose-700 text-xs font-bold tracking-[-0.015em] transition-colors cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Hapus</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Empty Dropzone Container */
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => !isUploading && fileInputRef.current?.click()}
          className={`relative rounded-2xl border-2 border-dashed p-6 text-center transition-all ${
            isUploading
              ? 'border-sky-400 bg-sky-50/40 cursor-wait'
              : isDragging
                ? 'border-sky-500 bg-sky-50/60 ring-4 ring-sky-500/10 cursor-pointer'
                : 'border-slate-300 hover:border-sky-500 bg-slate-50/50 hover:bg-slate-50 cursor-pointer'
          }`}
        >
          {isUploading ? (
            <div className="py-4 flex flex-col items-center justify-center space-y-2">
              <Loader2 className="w-8 h-8 text-sky-600 animate-spin" />
              <p className="text-xs font-bold text-slate-800 tracking-[-0.015em]">
                {uploadStage === 'compressing'
                  ? 'Mengoptimalkan ukuran foto secara otomatis...'
                  : 'Mengunggah foto ke server...'}
              </p>
              <p className="text-[11px] text-slate-600 tracking-[-0.015em]">
                Menyimpan ke Laravel Public Storage
              </p>
            </div>
          ) : (
            <div className="space-y-2.5">
              <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-sky-600 flex items-center justify-center mx-auto shadow-xs transition-transform">
                <UploadCloud className="w-6 h-6" />
              </div>

              <div>
                <p className="text-xs font-bold text-slate-800 tracking-[-0.015em]">
                  Klik untuk memilih file{' '}
                  <span className="text-slate-600 font-normal">atau seret &amp; lepas foto ke sini</span>
                </p>
                <p className="text-[11px] text-slate-600 tracking-[-0.015em] mt-0.5">
                  Format didukung: <span className="font-semibold text-slate-700">JPG, PNG, WebP, AVIF</span> (Auto-optimasi untuk file besar)
                </p>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 text-[11px] font-bold tracking-[-0.015em] shadow-xs">
                <ImageIcon className="w-3.5 h-3.5 text-slate-600" />
                <span>Pilih Foto dari Komputer</span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Upload Error Alert */}
      {uploadError && (
        <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 flex items-center gap-2 text-rose-700 text-xs font-semibold tracking-[-0.015em] animate-in fade-in">
          <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
          <span className="flex-1">{uploadError}</span>
          <button
            type="button"
            onClick={() => setUploadError(null)}
            className="text-rose-600 hover:text-rose-800 p-1 cursor-pointer"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}

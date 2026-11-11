import React, { useState, useRef } from 'react';
import { UploadCloud, Image as ImageIcon, X, RefreshCw, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

/**
 * ImageUploader Component
 * Pure local file upload with Drag-and-Drop and Click-to-Browse.
 * Conforms strictly to PakRT Rules: tight kerning, darker gray contrast, 24px/rounded-2xl containers.
 */
export default function ImageUploader({
  value,
  onChange,
  folder = 'general',
  aspect = 'landscape', // 'landscape' | 'avatar'
  className = '',
}) {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);
  const fileInputRef = useRef(null);

  const getCsrfToken = () => {
    return document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
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

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      uploadFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      uploadFile(e.target.files[0]);
    }
  };

  const uploadFile = async (file) => {
    // Validate file type
    const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/avif'];
    if (!validTypes.includes(file.type)) {
      setUploadError('Format file tidak didukung. Harap pilih gambar bertipe JPG, PNG, atau WebP.');
      return;
    }

    // Validate size (max 5MB)
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      setUploadError('Ukuran file terlalu besar. Batas maksimal file adalah 5 MB.');
      return;
    }

    setUploadError(null);
    setIsUploading(true);

    const formData = new FormData();
    formData.append('image', file);
    formData.append('folder', folder);

    try {
      const response = await fetch('/admin/upload', {
        method: 'POST',
        headers: {
          'X-CSRF-TOKEN': getCsrfToken(),
          'Accept': 'application/json',
        },
        body: formData,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        onChange(data.url);
      } else {
        setUploadError(data.message || 'Gagal mengunggah gambar. Silakan coba lagi.');
      }
    } catch (err) {
      setUploadError('Terjadi kendala koneksi saat mengunggah file.');
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleRemove = (e) => {
    e.stopPropagation();
    onChange('');
    setUploadError(null);
  };

  return (
    <div className={`space-y-2 ${className}`}>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/avif"
        onChange={handleFileChange}
        className="hidden"
      />

      {/* If Image exists, show preview card */}
      {value ? (
        <div className="relative rounded-2xl bg-slate-50 border border-slate-200 p-3 sm:p-4 transition-all">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            
            {/* Image Preview Container */}
            <div className={`relative overflow-hidden shrink-0 bg-slate-200 border border-slate-300/80 shadow-xs ${
              aspect === 'avatar' 
                ? 'w-16 h-16 rounded-full' 
                : 'w-full sm:w-36 h-28 sm:h-22 rounded-xl'
            }`}>
              <img
                src={value}
                alt="Uploaded Preview"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=300&q=80';
                }}
              />
              {isUploading && (
                <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center text-white">
                  <Loader2 className="w-5 h-5 animate-spin" />
                </div>
              )}
            </div>

            {/* Info & Action Controls */}
            <div className="flex-1 min-w-0 text-center sm:text-left space-y-1">
              <div className="flex items-center justify-center sm:justify-start gap-1.5 text-emerald-700 text-xs font-bold tracking-[-0.015em]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="truncate">File Foto Siap Digunakan</span>
              </div>
              <p className="text-[11px] font-mono text-slate-500 truncate" title={value}>
                {value.startsWith('/storage') ? value : 'Gambar Tersimpan'}
              </p>
              <p className="text-[11px] text-slate-500 tracking-[-0.015em]">
                Penyimpanan lokal: <span className="font-semibold text-slate-700">Laravel Public Storage</span>
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <button
                  type="button"
                  disabled={isUploading}
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-700 text-xs font-bold tracking-[-0.015em] transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Ganti File Foto</span>
                </button>
                <button
                  type="button"
                  disabled={isUploading}
                  onClick={handleRemove}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold tracking-[-0.015em] transition-colors cursor-pointer"
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
          onClick={() => fileInputRef.current?.click()}
          className={`relative rounded-2xl border-2 border-dashed p-6 text-center cursor-pointer transition-all ${
            isDragging
              ? 'border-sky-500 bg-sky-50/60 ring-4 ring-sky-500/10'
              : 'border-slate-300 hover:border-sky-500 bg-slate-50/50 hover:bg-slate-50'
          }`}
        >
          {isUploading ? (
            <div className="py-4 flex flex-col items-center justify-center space-y-2">
              <Loader2 className="w-8 h-8 text-sky-600 animate-spin" />
              <p className="text-xs font-bold text-slate-800 tracking-[-0.015em]">Mengunggah foto ke server...</p>
              <p className="text-[11px] text-slate-500">Menyimpan ke media penyimpanan lokal</p>
            </div>
          ) : (
            <div className="space-y-2.5">
              <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-sky-600 flex items-center justify-center mx-auto shadow-xs group-hover:scale-105 transition-transform">
                <UploadCloud className="w-6 h-6" />
              </div>
              
              <div>
                <p className="text-xs font-bold text-slate-800 tracking-[-0.015em]">
                  Klik untuk memilih file <span className="text-slate-500 font-normal">atau seret & lepas foto ke sini</span>
                </p>
                <p className="text-[11px] text-slate-500 tracking-[-0.015em] mt-0.5">
                  Format yang didukung: <span className="font-semibold text-slate-700">JPG, PNG, WebP</span> (Maksimal 5 MB)
                </p>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 text-[11px] font-bold tracking-[-0.015em] shadow-xs">
                <ImageIcon className="w-3.5 h-3.5 text-slate-500" />
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
            className="text-rose-500 hover:text-rose-800 p-1"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}

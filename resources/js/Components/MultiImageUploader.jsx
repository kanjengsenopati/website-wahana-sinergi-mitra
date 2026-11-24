import React, { useState, useRef, useEffect } from 'react';
import { usePage } from '@inertiajs/react';
import {
  UploadCloud,
  Images,
  X,
  Star,
  ChevronLeft,
  ChevronRight,
  AlertCircle,
  Loader2,
  CheckCircle2,
} from 'lucide-react';
import {
  DEFAULT_PROJECT_PLACEHOLDER,
  resolveImageUrl,
  isSupportedImageFile,
  getFreshCsrfHeaders,
  compressImageIfNeeded,
  formatFileSize,
} from '../utils/imageUtils';

/**
 * MultiImageUploader Component
 * Supports batch multi-select & drag-and-drop uploads (parallel concurrency = 3),
 * Canvas auto-compression, reorder controls, inline optional caption per photo,
 * and quick "Jadikan Sampul" promotion.
 * Conforms strictly to PakRT Rules: tight kerning, darker gray contrast, rounded-2xl containers.
 */
export default function MultiImageUploader({
  value = [],
  onChange,
  onSetAsCover,
  onUploadingChange,
  folder = 'projects',
  maxFiles = 12,
  className = '',
}) {
  const { csrf_token: pageCsrfToken, upload_limits: uploadLimits } = usePage().props || {};

  const items = Array.isArray(value) ? value : [];
  const remainingSlots = Math.max(0, maxFiles - items.length);

  const [isDragging, setIsDragging] = useState(false);
  const [uploadQueue, setUploadQueue] = useState([]); // [{ id, name, stage, note, error }]
  const [batchNotice, setBatchNotice] = useState(null);

  const fileInputRef = useRef(null);
  const onUploadingChangeRef = useRef(onUploadingChange);
  const wasUploadingRef = useRef(false);

  const isUploading = uploadQueue.some((q) => q.stage === 'queued' || q.stage === 'compressing' || q.stage === 'uploading');

  useEffect(() => {
    onUploadingChangeRef.current = onUploadingChange;
  }, [onUploadingChange]);

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

  const updateQueueItem = (id, patch) => {
    setUploadQueue((prev) => prev.map((q) => (q.id === id ? { ...q, ...patch } : q)));
  };

  const uploadSingleFile = async (queueId, rawFile) => {
    if (!isSupportedImageFile(rawFile)) {
      updateQueueItem(queueId, {
        stage: 'error',
        error: 'Format tidak didukung (hanya JPG, PNG, WebP, AVIF).',
      });
      return;
    }

    const hardClientMax = 25 * 1024 * 1024;
    if (rawFile.size > hardClientMax) {
      updateQueueItem(queueId, {
        stage: 'error',
        error: 'Ukuran file mentah melebihi 25 MB.',
      });
      return;
    }

    updateQueueItem(queueId, { stage: 'compressing', error: null });

    try {
      const phpMaxBytes = uploadLimits?.php_max_bytes || 2 * 1024 * 1024;
      const serverMaxBytes = (uploadLimits?.max_kb || 5120) * 1024;
      const effectiveServerLimit = Math.min(phpMaxBytes, serverMaxBytes);
      const targetCompressBytes = Math.min(1.5 * 1024 * 1024, Math.floor(effectiveServerLimit * 0.8));

      const { file: fileToUpload, wasCompressed, originalSize, compressedSize } =
        await compressImageIfNeeded(rawFile, {
          maxDimension: 1920,
          targetMaxBytes: targetCompressBytes,
        });

      if (fileToUpload.size > serverMaxBytes) {
        updateQueueItem(queueId, {
          stage: 'error',
          error: 'Ukuran file setelah optimasi masih melebihi 5 MB.',
        });
        return;
      }

      if (fileToUpload.size > phpMaxBytes) {
        updateQueueItem(queueId, {
          stage: 'error',
          error: `Ukuran file (${formatFileSize(fileToUpload.size)}) melebihi batas server (${formatFileSize(phpMaxBytes)}).`,
        });
        return;
      }

      updateQueueItem(queueId, { stage: 'uploading' });

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
        const note =
          wasCompressed && originalSize && compressedSize
            ? `${formatFileSize(originalSize)} → ${formatFileSize(compressedSize)}`
            : formatFileSize(fileToUpload.size);

        updateQueueItem(queueId, { stage: 'done', note });

        onChange((prevList) => {
          const safePrev = Array.isArray(prevList) ? prevList : [];
          if (safePrev.length >= maxFiles || safePrev.some((it) => it.url === data.url)) {
            return safePrev;
          }
          return [...safePrev, { url: data.url, caption: '' }];
        });
      } else if (response.status === 419) {
        updateQueueItem(queueId, {
          stage: 'error',
          error: 'Sesi CSRF berakhir. Muat ulang halaman lalu coba lagi.',
        });
      } else if (response.status === 413) {
        updateQueueItem(queueId, {
          stage: 'error',
          error: 'Ukuran file ditolak server (HTTP 413).',
        });
      } else {
        const firstValidationError = data?.errors?.image?.[0] || data?.errors?.folder?.[0];
        const rawMessage = typeof data?.message === 'string' ? data.message.trim() : '';
        const errMsg =
          firstValidationError ||
          (rawMessage && rawMessage !== 'Server Error'
            ? rawMessage
            : `Gagal mengunggah (HTTP ${response.status}).`);

        updateQueueItem(queueId, { stage: 'error', error: errMsg });
      }
    } catch {
      updateQueueItem(queueId, {
        stage: 'error',
        error: 'Kendala koneksi saat mengunggah file.',
      });
    }
  };

  const handleFilesSelected = async (fileList) => {
    const selectedFiles = Array.from(fileList || []);
    if (selectedFiles.length === 0) return;

    setBatchNotice(null);

    if (remainingSlots <= 0) {
      setBatchNotice(`Batas maksimal ${maxFiles} foto galeri telah tercapai. Hapus foto lama terlebih dahulu jika ingin menambah.`);
      return;
    }

    let filesToProcess = selectedFiles;
    if (selectedFiles.length > remainingSlots) {
      filesToProcess = selectedFiles.slice(0, remainingSlots);
      setBatchNotice(
        `Hanya ${remainingSlots} dari ${selectedFiles.length} foto yang diproses karena batas maksimal galeri adalah ${maxFiles} foto.`
      );
    }

    const jobs = filesToProcess.map((file, idx) => ({
      id: `${Date.now()}-${idx}-${Math.random().toString(36).slice(2, 7)}`,
      file,
      name: file.name || `Foto #${idx + 1}`,
    }));

    setUploadQueue((prev) => [
      ...prev.filter((q) => q.stage !== 'done'),
      ...jobs.map((j) => ({
        id: j.id,
        name: j.name,
        stage: 'queued',
        note: '',
        error: null,
      })),
    ]);

    // Controlled parallel upload pool (concurrency = 3)
    const concurrency = 3;
    let cursor = 0;

    const worker = async () => {
      while (cursor < jobs.length) {
        const currentIndex = cursor++;
        const job = jobs[currentIndex];
        await uploadSingleFile(job.id, job.file);
      }
    };

    const workers = Array.from({ length: Math.min(concurrency, jobs.length) }, () => worker());
    await Promise.all(workers);

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (remainingSlots > 0) {
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
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFilesSelected(e.dataTransfer.files);
    }
  };

  const handleRemoveItem = (idx) => {
    onChange((prevList) => (Array.isArray(prevList) ? prevList.filter((_, i) => i !== idx) : []));
  };

  const handleMoveItem = (idx, direction) => {
    onChange((prevList) => {
      if (!Array.isArray(prevList)) return [];
      const target = idx + direction;
      if (target < 0 || target >= prevList.length) return prevList;
      const next = [...prevList];
      [next[idx], next[target]] = [next[target], next[idx]];
      return next;
    });
  };

  const handleCaptionChange = (idx, nextCaption) => {
    onChange((prevList) =>
      Array.isArray(prevList)
        ? prevList.map((item, i) => (i === idx ? { ...item, caption: nextCaption } : item))
        : []
    );
  };

  const clearCompletedQueue = () => {
    setUploadQueue((prev) => prev.filter((q) => q.stage !== 'done' && q.stage !== 'error'));
  };

  return (
    <div className={`space-y-3 ${className}`}>
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept="image/jpeg,image/png,image/webp,image/avif,.jpg,.jpeg,.png,.webp,.avif"
        onChange={(e) => handleFilesSelected(e.target.files)}
        className="hidden"
      />

      {/* Header Counter Strip */}
      <div className="flex items-center justify-between gap-2 min-w-0">
        <div className="flex items-center gap-1.5 min-w-0">
          <Images className="w-4 h-4 text-blue-600 shrink-0" />
          <span className="text-xs font-bold text-slate-700 tracking-[-0.015em] truncate">
            Galeri Multi-Foto Dokumentasi Proyek
          </span>
        </div>
        <span
          className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold tabular-nums shrink-0 whitespace-nowrap ${
            items.length >= maxFiles
              ? 'bg-amber-50 text-amber-700 border border-amber-200'
              : 'bg-blue-600/10 text-blue-700'
          }`}
        >
          {items.length} / {maxFiles} Foto
        </span>
      </div>

      {/* Multi-File Dropzone */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => remainingSlots > 0 && fileInputRef.current?.click()}
        className={`rounded-2xl border-2 border-dashed p-4 sm:p-5 transition-all ${
          remainingSlots <= 0
            ? 'border-slate-200 bg-slate-100/70 cursor-not-allowed opacity-75'
            : isDragging
              ? 'border-blue-500 bg-blue-50/70 ring-4 ring-blue-500/10 cursor-pointer'
              : 'border-slate-300 hover:border-blue-500 bg-slate-50/60 hover:bg-slate-50 cursor-pointer'
        }`}
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-blue-600 flex items-center justify-center shrink-0 shadow-xs">
              {isUploading ? <Loader2 className="w-5 h-5 animate-spin" /> : <UploadCloud className="w-5 h-5" />}
            </div>
            <div>
              <p className="text-xs font-bold text-slate-800 tracking-[-0.015em]">
                {remainingSlots <= 0
                  ? `Slot galeri penuh (${maxFiles} foto)`
                  : isDragging
                    ? 'Lepas semua foto untuk langsung diunggah'
                    : 'Pilih banyak foto sekaligus atau seret & lepas ke sini'}
              </p>
              <p className="text-[11px] text-slate-600 tracking-[-0.015em] mt-0.5">
                Mendukung multi-upload paralel (JPG, PNG, WebP, AVIF) • Auto-kompresi • Sisa slot:{' '}
                <strong className="text-slate-800">{remainingSlots}</strong>
              </p>
            </div>
          </div>

          <button
            type="button"
            disabled={remainingSlots <= 0}
            onClick={(e) => {
              e.stopPropagation();
              fileInputRef.current?.click();
            }}
            className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-xs font-bold tracking-[-0.015em] shadow-xs transition-colors cursor-pointer shrink-0 whitespace-nowrap"
          >
            + Tambah Foto Galeri
          </button>
        </div>
      </div>

      {/* Batch Warning Notice */}
      {batchNotice && (
        <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 flex items-center gap-2 text-amber-800 text-xs font-semibold tracking-[-0.015em]">
          <AlertCircle className="w-4 h-4 shrink-0 text-amber-600" />
          <span className="flex-1">{batchNotice}</span>
          <button
            type="button"
            onClick={() => setBatchNotice(null)}
            className="text-amber-700 hover:text-amber-900 p-1 cursor-pointer"
          >
            ✕
          </button>
        </div>
      )}

      {/* Per-File Upload Progress Queue */}
      {uploadQueue.length > 0 && (
        <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[11px] font-bold uppercase tracking-[-0.015em] text-slate-600">
              Status Antrean Upload ({uploadQueue.filter((q) => q.stage === 'done').length}/{uploadQueue.length})
            </span>
            {!isUploading && (
              <button
                type="button"
                onClick={clearCompletedQueue}
                className="text-[11px] font-bold text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                Tutup Ringkasan
              </button>
            )}
          </div>
          <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
            {uploadQueue.map((q) => (
              <div
                key={q.id}
                className="flex items-center justify-between gap-2 px-2.5 py-1.5 rounded-xl bg-white border border-slate-200/80 text-xs"
              >
                <div className="flex items-center gap-2 min-w-0 flex-1">
                  {q.stage === 'done' ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  ) : q.stage === 'error' ? (
                    <AlertCircle className="w-3.5 h-3.5 text-red-600 shrink-0" />
                  ) : (
                    <Loader2 className="w-3.5 h-3.5 text-blue-600 animate-spin shrink-0" />
                  )}
                  <span className="font-semibold text-slate-800 truncate">{q.name}</span>
                </div>
                <span
                  className={`text-[11px] font-semibold shrink-0 tracking-[-0.015em] ${
                    q.stage === 'done'
                      ? 'text-emerald-600'
                      : q.stage === 'error'
                        ? 'text-red-600'
                        : 'text-blue-600'
                  }`}
                >
                  {q.stage === 'queued' && 'Menunggu...'}
                  {q.stage === 'compressing' && 'Optimasi...'}
                  {q.stage === 'uploading' && 'Mengunggah...'}
                  {q.stage === 'done' && (q.note ? `Selesai (${q.note})` : 'Selesai')}
                  {q.stage === 'error' && (q.error || 'Gagal')}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Uploaded Gallery Items Grid */}
      {items.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {items.map((item, idx) => {
            const imgSrc = resolveImageUrl(item.url, DEFAULT_PROJECT_PLACEHOLDER);
            return (
              <div
                key={`${item.url}-${idx}`}
                className="rounded-2xl bg-white border border-slate-200/90 shadow-xs overflow-hidden flex flex-col justify-between group"
              >
                <div className="relative h-28 bg-slate-100 overflow-hidden">
                  <img
                    src={imgSrc}
                    alt={item.caption || `Foto Galeri #${idx + 1}`}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = DEFAULT_PROJECT_PLACEHOLDER;
                    }}
                    className="w-full h-full object-cover"
                  />

                  {/* Top-Left Order Badge */}
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-slate-900/75 text-white text-[10px] font-bold tabular-nums">
                    #{idx + 1}
                  </span>

                  {/* Top-Right Actions: Promote to Cover & Remove */}
                  <div className="absolute top-2 right-2 flex items-center gap-1">
                    {onSetAsCover && (
                      <button
                        type="button"
                        onClick={() => onSetAsCover(idx)}
                        title="Jadikan Sampul Utama"
                        className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-amber-500 hover:bg-amber-600 text-white text-[10px] font-bold shadow-xs transition-colors cursor-pointer"
                      >
                        <Star className="w-3 h-3 fill-white" />
                        <span>Sampul</span>
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => handleRemoveItem(idx)}
                      title="Hapus Foto dari Galeri"
                      className="p-1 rounded-lg bg-red-600/90 hover:bg-red-700 text-white shadow-xs transition-colors cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Bottom-Right Reorder Controls */}
                  <div className="absolute bottom-2 right-2 flex items-center gap-1">
                    <button
                      type="button"
                      disabled={idx === 0}
                      onClick={() => handleMoveItem(idx, -1)}
                      title="Geser ke Kiri"
                      className="w-6 h-6 rounded-lg bg-slate-900/75 hover:bg-blue-600 disabled:opacity-35 text-white flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      disabled={idx === items.length - 1}
                      onClick={() => handleMoveItem(idx, 1)}
                      title="Geser ke Kanan"
                      className="w-6 h-6 rounded-lg bg-slate-900/75 hover:bg-blue-600 disabled:opacity-35 text-white flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Inline Caption Input */}
                <div className="p-2.5 bg-slate-50/70 border-t border-slate-100">
                  <input
                    type="text"
                    maxLength={255}
                    value={item.caption || ''}
                    onChange={(e) => handleCaptionChange(idx, e.target.value)}
                    placeholder="Caption foto (opsional)..."
                    className="w-full px-2.5 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-800 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 tracking-[-0.015em]"
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

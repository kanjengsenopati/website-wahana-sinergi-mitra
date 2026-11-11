import React from 'react';

export function formatThousands(value) {
  if (value === null || value === undefined || value === '') return '0';
  const num = typeof value === 'string' ? parseInt(value.replace(/\D/g, ''), 10) : Math.round(value);
  if (isNaN(num)) return '0';
  return new Intl.NumberFormat('id-ID').format(num);
}

export function formatRupiah(value) {
  if (value === null || value === undefined || value === '') return 'Rp 0';
  return `Rp ${formatThousands(value)}`;
}

export const Text = {
  /**
   * Text.H1: [22px / 24-44px desktop, Bold, Slate-900 (#0F172A), Tracking-[-0.03em]] - Header & Greetings
   */
  H1: ({ children, className = '', ...props }) => (
    <h1
      className={`text-[24px] sm:text-[32px] md:text-[40px] font-bold text-slate-900 tracking-[-0.03em] leading-tight ${className}`}
      {...props}
    >
      {children}
    </h1>
  ),

  /**
   * Text.H2: [16px / 18-24px desktop, Semi-bold, Slate-800 (#1E293B), Tracking-[-0.025em], Single-Line (whitespace-nowrap truncate + title)]
   */
  H2: ({ children, className = '', title, singleLine = true, ...props }) => {
    const textContent = typeof children === 'string' ? children : title;
    return (
      <h2
        title={title || (typeof children === 'string' ? children : undefined)}
        className={`text-[16px] sm:text-[18px] font-semibold text-slate-800 tracking-[-0.025em] leading-snug ${
          singleLine ? 'whitespace-nowrap truncate' : ''
        } ${className}`}
        {...props}
      >
        {children}
      </h2>
    );
  },

  /**
   * Text.Amount: [18px+, Bold, Emerald-600 (#10B981), Tracking-[-0.03em], Tabular-nums, whitespace-nowrap] - Data Keuangan/Saldo (HIJAU)
   */
  Amount: ({ value, prefix = 'Rp ', suffix = '', className = '', ...props }) => {
    const formatted = typeof value === 'number' || typeof value === 'string' ? formatThousands(value) : '0';
    return (
      <span
        className={`text-[18px] sm:text-[20px] font-bold text-emerald-600 tracking-[-0.03em] tabular-nums whitespace-nowrap ${className}`}
        {...props}
      >
        {prefix}{formatted}{suffix}
      </span>
    );
  },

  /**
   * Text.Label: [11px, Bold, Uppercase, Tracking-[-0.015em] (RAPAT PROPER), Slate-600 (#475569 Darker Gray), Single-Line]
   */
  Label: ({ children, className = '', title, singleLine = true, ...props }) => {
    return (
      <span
        title={title || (typeof children === 'string' ? children : undefined)}
        className={`text-[11px] font-bold uppercase tracking-[-0.015em] text-slate-600 ${
          singleLine ? 'whitespace-nowrap truncate' : ''
        } ${className}`}
        {...props}
      >
        {children}
      </span>
    );
  },

  /**
   * Text.Body: [14px, Medium, Slate-700 (#334155 Darker Gray), Tracking-[-0.015em]] - Isi informasi & Deskripsi
   */
  Body: ({ children, className = '', ...props }) => (
    <p
      className={`text-[14px] font-medium text-slate-700 tracking-[-0.015em] leading-relaxed ${className}`}
      {...props}
    >
      {children}
    </p>
  ),

  /**
   * Text.Caption: [12px, Medium, Non-Italic (not-italic), Slate-600 (#475569 Darker Gray), Tracking-[-0.015em]]
   */
  Caption: ({ children, className = '', ...props }) => (
    <span
      className={`text-[12px] font-medium not-italic text-slate-600 tracking-[-0.015em] ${className}`}
      {...props}
    >
      {children}
    </span>
  ),
};

export default Text;

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

  /**
   * Text.AccentTitle: Render premium two-tone gradient title.
   * If string contains `{accent text}`, the wrapped portion is styled with gradient.
   * If no curly brackets, smartly highlights the concluding phrase.
   * Supports `asBlock` to put the accent text on a new line (as in Gambar 1 & Gambar 3).
   */
  AccentTitle: ({ text = '', className = '', accentClassName = '', asBlock = false, ...props }) => {
    if (!text || typeof text !== 'string') {
      return (
        <h1 className={`text-[26px] sm:text-[34px] lg:text-[38px] font-bold text-slate-900 tracking-[-0.03em] leading-tight ${className}`} {...props}>
          {text}
        </h1>
      );
    }

    // Pattern for {accent text}
    const match = text.match(/^(.*?)\{(.*?)\}(.*)$/);

    let prefix = '';
    let accent = '';
    let suffix = '';

    if (match) {
      prefix = match[1];
      accent = match[2];
      suffix = match[3];
    } else {
      // Auto fallback: split last 2 words or last phrase
      const words = text.trim().split(' ');
      if (words.length > 2) {
        accent = words.slice(-2).join(' ');
        prefix = words.slice(0, -2).join(' ') + ' ';
      } else if (words.length === 2) {
        prefix = words[0] + ' ';
        accent = words[1];
      } else {
        accent = text;
      }
    }

    const defaultGradientClass = "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-600 to-emerald-600";

    return (
      <h1
        className={`text-[26px] sm:text-[34px] lg:text-[38px] font-bold text-slate-900 tracking-[-0.03em] leading-tight ${className}`}
        {...props}
      >
        {prefix && (asBlock ? <span className="block">{prefix.trim()}</span> : <span>{prefix}</span>)}
        {accent && (
          <span className={`${asBlock ? 'block ' : ''}${defaultGradientClass} ${accentClassName}`}>
            {accent}
          </span>
        )}
        {suffix && <span>{suffix}</span>}
      </h1>
    );
  },
};

export default Text;

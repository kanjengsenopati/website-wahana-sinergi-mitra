import React from 'react';
import { formatThousands } from './Typography';

export function CurrencyInput({
  value,
  onChange,
  placeholder = '0',
  className = '',
  disabled = false,
  prefix = 'Rp',
  ...props
}) {
  const displayValue = value ? formatThousands(value) : '';

  const handleChange = (e) => {
    const rawVal = e.target.value.replace(/\D/g, '');
    const numericVal = rawVal ? parseInt(rawVal, 10) : '';
    if (onChange) {
      onChange(numericVal);
    }
  };

  return (
    <div className="relative flex items-center w-full">
      {prefix && (
        <span className="absolute left-4 text-[14px] font-semibold text-slate-500 pointer-events-none select-none">
          {prefix}
        </span>
      )}
      <input
        type="text"
        inputMode="numeric"
        disabled={disabled}
        value={displayValue}
        onChange={handleChange}
        placeholder={placeholder}
        className={`w-full ${
          prefix ? 'pl-11' : 'pl-4'
        } pr-4 py-3 bg-white text-slate-900 font-semibold tracking-[-0.015em] rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all ${
          disabled ? 'bg-slate-100 cursor-not-allowed text-slate-400' : ''
        } ${className}`}
        {...props}
      />
    </div>
  );
}

export default CurrencyInput;

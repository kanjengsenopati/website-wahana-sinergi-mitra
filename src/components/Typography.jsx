import React from 'react';

/**
 * PakRT Typography System
 * Strictly enforced typography wrappers:
 * - Text.H1: [22px, Bold, Slate-900]
 * - Text.H2: [16px, Semi-bold, Slate-800]
 * - Text.Amount: [18px, Bold, Emerald-600]
 * - Text.Label: [11px, Bold, Uppercase, Tracking-widest, Slate-400]
 * - Text.Body: [14px, Medium, Slate-600]
 * - Text.Caption: [12px, Regular, Italic, Slate-400]
 */

export const Text = {
  H1: ({ children, className = '', as: Component = 'h1', ...props }) => (
    <Component
      className={`text-[22px] font-bold text-slate-900 tracking-tight leading-tight ${className}`}
      {...props}
    >
      {children}
    </Component>
  ),

  H2: ({ children, className = '', as: Component = 'h2', ...props }) => (
    <Component
      className={`text-[16px] font-semibold text-slate-800 leading-snug ${className}`}
      {...props}
    >
      {children}
    </Component>
  ),

  Amount: ({ children, className = '', as: Component = 'span', ...props }) => (
    <Component
      className={`text-[18px] font-bold text-emerald-600 tabular-nums ${className}`}
      {...props}
    >
      {children}
    </Component>
  ),

  Label: ({ children, className = '', as: Component = 'span', ...props }) => (
    <Component
      className={`text-[11px] font-bold uppercase tracking-widest text-slate-400 leading-none ${className}`}
      {...props}
    >
      {children}
    </Component>
  ),

  Body: ({ children, className = '', as: Component = 'p', ...props }) => (
    <Component
      className={`text-[14px] font-medium text-slate-600 leading-relaxed ${className}`}
      {...props}
    >
      {children}
    </Component>
  ),

  Caption: ({ children, className = '', as: Component = 'span', ...props }) => (
    <Component
      className={`text-[12px] font-normal italic text-slate-400 ${className}`}
      {...props}
    >
      {children}
    </Component>
  ),
};

export default Text;

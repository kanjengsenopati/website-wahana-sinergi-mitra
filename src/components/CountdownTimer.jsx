import React, { useState, useEffect } from 'react';

const TARGET_DATE_KEY = 'wsm_launch_target_timestamp';

function getOrSetTargetTimestamp() {
  const existing = typeof window !== 'undefined' ? localStorage.getItem(TARGET_DATE_KEY) : null;
  if (existing) {
    const parsed = parseInt(existing, 10);
    if (!isNaN(parsed) && parsed > Date.now()) {
      return parsed;
    }
  }
  // Target 60 days
  const target = Date.now() + 60 * 24 * 60 * 60 * 1000;
  if (typeof window !== 'undefined') {
    localStorage.setItem(TARGET_DATE_KEY, target.toString());
  }
  return target;
}

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 60,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetTimestamp = getOrSetTargetTimestamp();

    const calculateTimeLeft = () => {
      const difference = targetTimestamp - Date.now();
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { 
      label: 'HARI', 
      value: String(timeLeft.days).padStart(2, '0'),
      color: 'text-white'
    },
    { 
      label: 'JAM', 
      value: String(timeLeft.hours).padStart(2, '0'),
      color: 'text-white'
    },
    { 
      label: 'MENIT', 
      value: String(timeLeft.minutes).padStart(2, '0'),
      color: 'text-cyan-400'
    },
    { 
      label: 'DETIK', 
      value: String(timeLeft.seconds).padStart(2, '0'), 
      isAccent: true,
      color: 'text-emerald-400'
    },
  ];

  return (
    <div className="w-full">
      {/* Prominent Outstanding Countdown Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5">
        {timeUnits.map((unit, idx) => (
          <div
            key={idx}
            className={`relative group flex flex-col items-center justify-center py-6 sm:py-9 px-4 rounded-[24px] bg-slate-950/30 backdrop-blur-md border border-white/10 shadow-[0_12px_32px_rgba(0,0,0,0.4)] transition-all duration-300 hover:bg-slate-900/40 hover:border-cyan-400/40 hover:shadow-[0_12px_40px_rgba(6,182,212,0.2)] hover:-translate-y-1 ${
              unit.isAccent ? 'border-emerald-400/30 shadow-[0_12px_36px_rgba(16,185,129,0.18)] hover:border-emerald-400/60' : ''
            }`}
          >
            {/* Top status pulse dot */}
            <div className="absolute top-3.5 right-4 flex items-center">
              <span 
                className={`w-2 h-2 rounded-full ${
                  unit.isAccent 
                    ? 'bg-emerald-400 animate-ping opacity-90' 
                    : 'bg-cyan-400/70'
                }`} 
              />
            </div>

            {/* Outstanding Giant Digits with intense drop-shadow for 100% legibility */}
            <div className="relative">
              <span
                className={`block text-[48px] sm:text-[64px] md:text-[76px] font-black font-mono leading-none tracking-tight ${unit.color} drop-shadow-[0_4px_18px_rgba(0,0,0,0.95)] select-none`}
              >
                {unit.value}
              </span>
            </div>

            {/* Clean Tag Label with subtle glass background */}
            <span className="mt-3 px-3 py-1 rounded-full bg-slate-900/60 backdrop-blur-sm border border-white/10 text-slate-200 text-[11px] sm:text-[12px] font-bold tracking-widest uppercase shadow-sm">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;

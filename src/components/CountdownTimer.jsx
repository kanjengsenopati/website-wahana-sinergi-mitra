import React, { useState, useEffect } from 'react';
import { Text } from './Typography';
import { Clock } from 'lucide-react';

const TARGET_DATE_KEY = 'wsm_launch_target_timestamp';

function getOrSetTargetTimestamp() {
  const existing = typeof window !== 'undefined' ? localStorage.getItem(TARGET_DATE_KEY) : null;
  if (existing) {
    const parsed = parseInt(existing, 10);
    if (!isNaN(parsed) && parsed > Date.now()) {
      return parsed;
    }
  }
  // 60 hari x 24 jam x 60 menit x 60 detik x 1000 milidetik
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
    { label: 'HARI', value: String(timeLeft.days).padStart(2, '0') },
    { label: 'JAM', value: String(timeLeft.hours).padStart(2, '0') },
    { label: 'MENIT', value: String(timeLeft.minutes).padStart(2, '0') },
    { label: 'DETIK', value: String(timeLeft.seconds).padStart(2, '0'), isAccent: true },
  ];

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4 px-1">
        <div className="flex items-center gap-2">
          <Clock className="w-[18px] h-[18px] text-blue-600 stroke-[2]" />
          <Text.H2>Estimasi Peluncuran Resmi</Text.H2>
        </div>
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-600/10 text-blue-600 text-[11px] font-bold tracking-wider uppercase">
          60 Hari Target
        </span>
      </div>

      {/* Prominent High-Contrast Timer Display */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {timeUnits.map((unit, idx) => (
          <div
            key={idx}
            className={`group relative flex flex-col items-center justify-center py-5 sm:py-7 px-3 bg-white/90 backdrop-blur-md rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border-0 text-center transition-all duration-300 hover:shadow-pakrt-lg hover:-translate-y-0.5 ${
              unit.isAccent ? 'ring-2 ring-emerald-500/20 bg-gradient-to-b from-white/95 to-emerald-50/20' : ''
            }`}
          >
            {/* Ambient subtle glow dot */}
            <div className="absolute top-3.5 right-4 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className={`w-1.5 h-1.5 rounded-full ${unit.isAccent ? 'bg-emerald-500' : 'bg-blue-600'}`} />
            </div>

            {/* Extra Large Prominent Figures */}
            <span
              className={`text-[42px] sm:text-[52px] md:text-[58px] font-extrabold leading-none tracking-tight font-mono mb-2 ${
                unit.isAccent ? 'text-emerald-600' : 'text-slate-900'
              }`}
            >
              {unit.value}
            </span>

            {/* Sub-label */}
            <div className="px-2.5 py-0.5 rounded-full bg-slate-100/90 text-slate-500 font-semibold text-[11px] tracking-widest uppercase">
              {unit.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;

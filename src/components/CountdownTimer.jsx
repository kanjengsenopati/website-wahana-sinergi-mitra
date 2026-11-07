import React, { useState, useEffect } from 'react';
import { Text } from './Typography';
import { Clock } from 'lucide-react';

// Target 60 hari dari peluncuran perencanaan
// Menggunakan tanggal referensi yang konsisten
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
    { label: 'DETIK', value: String(timeLeft.seconds).padStart(2, '0') },
  ];

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2">
          <Clock className="w-[18px] h-[18px] text-blue-600 stroke-[2]" />
          <Text.H2>Estimasi Peluncuran Resmi</Text.H2>
        </div>
        <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-blue-600/10 text-blue-600 text-[11px] font-bold tracking-wider uppercase">
          60 Hari Target
        </span>
      </div>

      <div className="grid grid-cols-4 gap-2.5 sm:gap-4">
        {timeUnits.map((unit, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center py-4 px-2 bg-white/80 backdrop-blur-md rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-0 text-center transition-all duration-300 hover:shadow-pakrt-lg"
          >
            <span className="text-[26px] sm:text-[32px] font-bold text-slate-900 leading-none tracking-tight font-mono mb-1.5">
              {unit.value}
            </span>
            <Text.Label className="text-[10px] sm:text-[11px]">
              {unit.label}
            </Text.Label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;

"use client";

import { useTimer } from "@/hooks/useTimer";

const END_DATE = new Date("Mon Aug 07 2024 20:11:38 GMT+0200");

const Timer = () => {
  const [days, hours, minutes, seconds] = useTimer(END_DATE);

  return (
    <div className="flex gap-4">
      <div className="flex flex-col justify-center items-center p-4 rounded-xl bg-slate-600">
        <p className="text-2xl font-semibold">{days}</p>
        <p className="text-sm">Days</p>
      </div>
      <div className="flex flex-col justify-center items-center p-4 rounded-xl bg-slate-600">
        <p className="text-2xl font-semibold">{hours}</p>
        <p className="text-sm">Hours</p>
      </div>
      <div className="flex flex-col justify-center items-center p-4 rounded-xl bg-slate-600">
        <p className="text-2xl font-semibold">{minutes}</p>
        <p className="text-sm">Mins</p>
      </div>
      <div className="flex flex-col justify-center items-center p-4 rounded-xl bg-slate-600">
        <p className="text-2xl font-semibold" suppressHydrationWarning>
          {seconds}
        </p>
        <p className="text-sm">Secs</p>
      </div>
    </div>
  );
};

export default Timer;

"use client";

import { useEffect, useState } from "react";
import { useTimer } from "@/hooks/useTimer";

const END_DATE = new Date("Mon Aug 07 2024 20:11:38 GMT+0200");

const Timer = () => {
  const [days, hours, minutes, seconds] = useTimer(END_DATE);

  console.log(seconds);

  const timerTest = {
    days: 0,
    hours: 10,
    mins: 20,
    secs: 40,
  };

  const timerKeys = Object.keys(timerTest);
  const timerUpperCase = timerKeys.map(
    (el) => el.charAt(0).toUpperCase() + el.slice(1)
  );

  return (
    <div className="flex gap-4">
      {/* {timerUpperCase.map((item, index) => (
        <div
          key={item}
          className="flex flex-col justify-center items-center p-4 rounded-xl bg-slate-600"
        >
          <p className="text-2xl font-semibold">
            {timerTest[timerKeys[index]]}
          </p>
          <p className="text-sm">{item}</p>
        </div>
      ))} */}
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
        <p className="text-sm">Minutes</p>
      </div>
      <div className="flex flex-col justify-center items-center p-4 rounded-xl bg-slate-600">
        <p className="text-2xl font-semibold">{seconds}</p>
        <p className="text-sm">Seconds</p>
      </div>
    </div>
  );
};

export default Timer;

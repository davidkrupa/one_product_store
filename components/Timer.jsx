"use client";

import { useEffect, useState } from "react";

const Timer = () => {
  const timer = {
    days: 0,
    hours: 10,
    mins: 20,
    secs: 40,
  };

  const timerKeys = Object.keys(timer);
  const timerUpperCase = timerKeys.map(
    (el) => el.charAt(0).toUpperCase() + el.slice(1)
  );

  return (
    <div className="flex gap-4">
      {timerUpperCase.map((item, index) => (
        <div
          key={item}
          className="flex flex-col justify-center items-center p-4 rounded-xl bg-slate-600"
        >
          <p className="text-2xl font-semibold">{timer[timerKeys[index]]}</p>
          <p className="text-sm">{item}</p>
        </div>
      ))}
    </div>
  );
};

export default Timer;

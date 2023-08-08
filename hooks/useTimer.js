import { useEffect, useState } from "react";

export const useTimer = (endDate) => {
  const [timer, setTimer] = useState(() => getTimeLeft(endDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(getTimeLeft(endDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [endDate]);

  return getFormattedTimeLeft(timer);
};

const getTimeLeft = (endDate) => {
  return endDate.getTime() - new Date().getTime();
};

const getFormattedTimeLeft = (timer) => {
  const miliseconds = {
    day: 86400000, // 1000 * 60 * 60 * 24
    hour: 3600000, // 1000 * 60 * 60
    minute: 60000, // 1000 * 60
    second: 1000,
  };
  const days = Math.floor(timer / miliseconds.day);
  const hours = Math.floor((timer % miliseconds.day) / miliseconds.hour);
  const minutes = Math.floor((timer % miliseconds.hour) / miliseconds.minute);
  const seconds = Math.floor((timer % miliseconds.minute) / miliseconds.second);

  return [days, hours, minutes, seconds];
};

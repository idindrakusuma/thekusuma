import { useState, useEffect, useCallback } from 'react';
import { EPOCH_END_EVENT, EPOCH_START_EVENT } from '@/constants';

const INTERVAL_TIME = 1000;
const DAY_PER_SECONDS = 86400;
const HOUR_PER_SECONDS = 3600;
const MINUTE_PER_SECONDS = 60;

const getEpochTime = () => Math.floor(new Date().getTime() / 1000);

function useDateCountdown() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [currentEpochTime, setCurrentEpochTime] = useState(() => getEpochTime());
  const [timeHasRunOut, setTimeHasRunOut] = useState(false);
  const [isEventOver, setIsEventOver] = useState(0);

  const calculateTimeLeft = useCallback(() => {
    const TIME_LEFT = EPOCH_START_EVENT - currentEpochTime;

    if (TIME_LEFT < 0) {
      setIsEventOver(currentEpochTime > EPOCH_END_EVENT);
      setTimeHasRunOut(true);
      return;
    }

    const daysLeft = Math.floor(TIME_LEFT / DAY_PER_SECONDS);
    const hoursLeft = Math.floor((TIME_LEFT % DAY_PER_SECONDS) / HOUR_PER_SECONDS);
    const minutesLeft = Math.floor(((TIME_LEFT % DAY_PER_SECONDS) % HOUR_PER_SECONDS) / MINUTE_PER_SECONDS);
    const secondsLeft = Math.floor(((TIME_LEFT % DAY_PER_SECONDS) % HOUR_PER_SECONDS) % MINUTE_PER_SECONDS);
    const currentEpoch = getEpochTime();

    setDays(daysLeft);
    setHours(hoursLeft);
    setMinutes(minutesLeft);
    setSeconds(secondsLeft);
    setCurrentEpochTime(currentEpoch);
  }, [currentEpochTime]);

  useEffect(() => {
    const interval = setInterval(() => {
      /**
       * If time has run out then stop the interval!
       */
      if (timeHasRunOut) {
        clearInterval(interval);
      } else {
        calculateTimeLeft();
      }
    }, INTERVAL_TIME);

    return () => clearInterval(interval);
  }, [calculateTimeLeft, timeHasRunOut]);

  return { days, hours, minutes, seconds, timeHasRunOut, isEventOver };
}

export default useDateCountdown;

import React from 'react';
import useDateCountdown from '@/hooks/useDateCountdown';
import CountItem from './CountItem';
import { styMargin } from './styles';

function CountContainer() {
  const { days, hours, minutes, seconds } = useDateCountdown();

  return (
    <div className="col-md-12" css={styMargin('0 0 16px 0')}>
      <CountItem text="Days" number={days} />
      <CountItem text="Hours" number={hours} />
      <CountItem text="Minutes" number={minutes} />
      <CountItem text="Seconds" number={seconds} />
    </div>
  );
}

export default CountContainer;

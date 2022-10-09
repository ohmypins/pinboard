import { useEffect, useState } from 'react';

export default function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, [setDate]);

  const dateFormat = new Intl.DateTimeFormat('en-US');

  return <>{dateFormat.format(date)}</>;
}

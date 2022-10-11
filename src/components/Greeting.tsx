import { useEffect, useState } from 'react';

export default function Greeting() {
  const [greet, setGreet] = useState('');

  useEffect(() => {
    const currentDate = new Date();
    const currentHours = currentDate.getHours();

    if (currentHours >= 5 && currentHours < 12) {
      setGreet('Good morning');
    } else if (currentHours >= 12 && currentHours < 17) {
      setGreet('Good afternoon');
    } else if (currentHours >= 17 && currentHours < 20) {
      setGreet('Good evening');
    } else if (currentHours >= 20 || currentHours < 5) {
      setGreet('Good night');
    }
  }, []);

  return <>{greet}</>;
}

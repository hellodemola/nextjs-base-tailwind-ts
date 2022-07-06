import { useEffect, useState } from 'react';

const UseCurrentTime = (initialDate = new Date('6/7/2022')) => {
  const [date, setDate] = useState(initialDate);

  useEffect(() => {
    setDate(new Date());
  }, []);

  const [year, month, day] = [date.getFullYear(), date.getMonth(), date.getDay()];

  const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];

  return {
    year, month, day, hour, minutes, seconds,
  };
};

export default UseCurrentTime;

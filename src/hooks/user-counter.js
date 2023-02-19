import { useState, useEffect } from 'react';

const useCounterLog = (initialValue) => {
  const [counter, setCounter] = useState(initialValue);

  useEffect(() => {
    console.log('useCounter: ', counter);
  }, [counter]);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return {
    counter,
    incrementCounter: handleClick,
  };
};

export default useCounterLog;

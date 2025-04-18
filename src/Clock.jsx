import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval); // Cleanup to avoid memory leaks
  }, []);

  return (
    <div>
      <h1>Digital Clock in React JS</h1>
      <h1>{time}</h1>
    </div>
  );
};

export default Clock;

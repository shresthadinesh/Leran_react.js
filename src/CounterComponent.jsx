import React, { useEffect } from "react";

const CounterComponent = ({count}) => {
  const handleCounter = () => {
    console.log("Counter is clicked");
  };
  useEffect(() => {
    handleCounter();
  }, []);

  return (
    <div>
      <h1>Counter Component {count}</h1>
    </div>
  );
};
export default CounterComponent;

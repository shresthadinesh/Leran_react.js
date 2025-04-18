import React, { useState } from "react";
const Input = () => {
  const [val, setVal] = useState("");
  return (
    <div>
        <hr />
      <h2>Get the input value</h2>
      <input
        type="text"
        value={val}
        onChange={(event) => setVal(event.target.value)}
        placeholder="Enter your name"
      />
      <h1>Your name is: {val}</h1>
      <button onClick={() => setVal("")}>Clear Value</button>
      <hr />
    </div>
  );
};
export default Input;

 import{useState} from 'react';
 function StateHooks() {
    const [fruit, setFruit] = useState("Apple");
    const handleFruit = () => {
      setFruit("Banana");
    }
  return (
    <div>

        <h1>This Section for State and StateHooks</h1>
        <h2>{fruit}</h2>
        <button onClick={handleFruit}>Change Fruit Name </button>
    </div>
  );
}
const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};
export default StateHooks;
export { Counter };

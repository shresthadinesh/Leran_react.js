import{useState} from 'react';
function ToogleHide() {
   
  const [isHidden, setIsHidden] = useState(false); // useState is a hook that allows you to have state variables in functional components
  // isHidden is the state variable, and setIsHidden is the function that updates the state variable
  // useState false hide the toggle and true show the toggle
    const [count, setCount] = useState(1);
  return (
    <div>
      <h1>This Section for ToogleHide</h1>
      {
        isHidden ?  <h2>show</h2>:<h2>hide</h2>
      }
      <button onClick={()=>setIsHidden(!isHidden)}>show and hide</button>

        <h2>{count}</h2>
        <button onClick={()=>setCount(count + 1)}>Increment</button>
        <button onClick={()=>setCount(count - 1)}>Decrement</button>
        {
            count===0 ? <h2>Zero</h2> 
            :count===1 ? <h2>One</h2>
            :count===2 ? <h2>Two</h2>
            :count===3 ? <h2>Three</h2>
            : <h2> Other Condition</h2>
        }
    </div>
  );
}
export default ToogleHide;
// for the use of toogle component , create a new file called ToogleHide.jsx in the src folder and add the following code:
// and use <ToogleHide /> where you want to use the toogle component in the App.js file
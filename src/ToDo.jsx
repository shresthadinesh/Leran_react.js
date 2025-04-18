import Dinesh from "./assets/Dinesh.png";
import StateHooks from "./StateHooks";
function ToDo() {
  function handleClick() {
    alert("Hello World !");
  }

  const fruit = () => {
    alert("Apple, Banana, Orange, Mango, Grapes");
  };
  const color = (name) => {
    alert(name);
  }

  return (
    <div>
      
      <h1>Dinesh Shrestha</h1>
      <img
        src={Dinesh}
        alt="Dinesh"
        className="photo"
        height={400}
        width={500}
      />
      <ul>
        <li>Hi, I'm Dinesh Shrestha.</li>
        <li>Computer Science and Information Technology</li>
        <li>Kathmandu, Nepal</li>
      </ul>

      <button onClick={() => alert("Hello World !")}>Click Me</button>
      <button onClick={handleClick}>Click Here</button>
      <button onClick={fruit}>Fruit</button>
      <button onClick={()=>color("Red")}>colurs</button>
    </div>
  );
}

export default ToDo;

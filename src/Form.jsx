import React, { useState } from "react";
function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <h1>Controller Component</h1>
      <form action="" method="get">
        <input type="text" value={name} onChange={(event)=>setName(event.target.value)}  placeholder="Enter Name" /> <br /> <br />
        <input type="email" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="Enter Email" /> <br /> <br />
        <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)} placeholder="Enter Password" /> <br /> <br />
        <button>Submit</button> <br /> <br />
        <br />
        <button onClick={()=>{setName(''), setEmail(''), setPassword('')}}>Clear</button>
      </form>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{password}</h1>
      <hr />
    </div>
  );
}
export default Form;

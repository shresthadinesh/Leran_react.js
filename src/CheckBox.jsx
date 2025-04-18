import React, { useState } from "react";
function CheckBox() {
  const [Skills, setSkills] = useState([]);
  const handleCheckbox = (e) => {
    if (e.target.checked) {
      setSkills([...Skills, e.target.value, e.target.checked]);
    } else {
      setSkills(Skills.filter((skill) => skill !== e.target.value));
    }
  };
  return (
    <div>
      <h1> Handle Checkbox in React JS</h1>
      <h2>Select your Skills </h2>

      <input
        onClick={handleCheckbox}
        type="checkbox"
        id="php"
        value="PHP Framework"
      />
      <label for="php"> PHP Framework</label>
      <br />

      <input
        onClick={handleCheckbox}
        type="checkbox"
        id="react"
        value="React JS"
      />
      <label for="react"> React JS</label>
      <br />

      <input
        onClick={handleCheckbox}
        type="checkbox"
        id="angular"
        value="Angular"
      />
      <label for="angular"> Angular JS</label>
      <br />

      <h1>{Skills}</h1>

      <hr />
    </div>
  );
}
export default CheckBox;

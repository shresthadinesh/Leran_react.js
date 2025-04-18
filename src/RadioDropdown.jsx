import React, { useState } from "react";
function RadioDropdown() {
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  return (
    <div>
      <h1> Handle Radio and Dropdown</h1>
      <h2>Select Gender</h2>
      <input
        type="radio"
        onChange={(event) => setGender(event.target.value)}
        name="gender"
        id="male"
        value={"male"}
      />
      <label htmlFor="male"> Male</label>
      <input
        type="radio"
        onChange={(event) => setGender(event.target.value)}
        name="gender"
        id="female"
        value={"female"}
      />
      <label htmlFor="female"> Female</label>
      <h2>Selected Gender : {gender}</h2> <hr />

      
      <h2>Select City</h2>
      <select
        onChange={(event) => setCity(event.target.value)}
        defaultValue={"Chitwan"}
      >
        <option value="Kathmandu">Kathmandu</option>
        <option value="Pokhara">Pokhara</option>
        <option value="Biratnagar">Biratnagar</option>
        <option value="Birgunj">Birgunj</option>
        <option value="Butwal">Butwal</option>
        <option value="Dharan">Dharan</option>
        <option value="Chitwan">Chitwan</option>
      </select>
      <h2>Selected City : {city}</h2> <hr />
    </div>
  );
}
export default RadioDropdown;

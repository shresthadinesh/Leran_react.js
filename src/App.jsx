import College from "./College";
import StateHooks, { Counter } from "./StateHooks";
import ToDo from "./ToDo";
import ToogleHide from "./ToogleHide";
import UserLogin, { Profile, Settings, UserKey } from "./UserLogin";
import User from "./User";
import Wrapper from "./Wrapper";
import Input from "./Input";
import Form from "./Form";
import CheckBox from "./CheckBox";
import Radio from "./RadioDropdown";
import RadioDropdown from "./RadioDropdown";
import MapFunction from "./MapFunction";
import Clock from "./Clock";
import NestedLoop from "./assets/NestedLoop";
import CounterComponent from "./CounterComponent";
import { useState } from "react";
import UserCard from "./UserCard";

function App() {

  return (
    <div>
      {/* <ToDo /> */}
      {/* <StateHooks /> */}
      {/* <Counter /> */}
      {/* <ToogleHide /> */}
      {/* <College /> */}
      {/* < User name="Dinesh Shrestha"/>
      <User  />
      < User />
      <Wrapper>
        <h1>Hello, Dinesh </h1>
      </Wrapper>
      <Wrapper>
        <h1 style={{color: "green"}}> This is the children props using style </h1>
      </Wrapper>
        < Input /> */}
      {/* < Form /> */}
      {/* < CheckBox /> */}
      {/* <RadioDropdown /> */}
      {/* < MapFunction />   */}
      {/* < Clock /> */}

      {/* < NestedLoop /> */}

      {/* < CounterComponent  count = {count}  />
      <button onClick = {() => setCount(count + 1)}>Click Me</button> */}

        < UserCard />

    </div>
  );
}

export default App;

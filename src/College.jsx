import Properties from "./Properties";
function College() {
  // let userName = "Dinesh Shrestha";
  // let userAge = 22;
  // let address = "Kathmandu";
  let userObject = {
    name: "Dinesh Shrestha",
    age: 21,
    address: "Kathmandu",
  };
  let userObject2 = {
    name: "Ram Shrestha",
    age: 22,
    address: "Bhaktapur",
  };
  let userObject3 = {
    name: "Shyam Shrestha",
    age: 23,
    address: "bharatpur",
  };
  return (
    <div>
      <h1>College</h1>
      {/* <Properties name={userName} age={userAge} address={address} /> */}
      <Properties userObject={userObject} />
      <Properties userObject={userObject2} />
      <Properties userObject={userObject3} />
    </div>
  );
}
export default College;

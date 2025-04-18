import ReuseComponent from "./ReuseComponent";
function MapFunction() {
  const userData = [
    {
      id: 1,
      name: "Dinesh Shrestha",
      email: "dinesh@test.com",
      phone: "9841234567",
    },
    { id: 2, name: "Ram Shrestha", email: "ram@test.com", phone: "9841234567" },
    {
      id: 3,
      name: "Shyam Shrestha",
      email: "shyam@test.com",
      phone: "9841234567",
    },
    {
      id: 4,
      name: "Hari Shrestha",
      email: "hari@test.com",
      phone: "9841234567",
    },
  ];
  return (
    <div>
      <h2> Dummy Data</h2>

      <table border="1">
        <thead>
          <tr>
            <td> ID</td>
            <td> Name</td>
            <td> Email</td>
            <td> Phone</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Dinesh Shrestha</td>
            <td>dinesh@test.com </td>
            <td>9841234567</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Ram Shrestha</td>
            <td> ram@test.com </td>
            <td>9841234567</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Shyam Shrestha</td>
            <td> shyam@test.com </td>
            <td>9841234567</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Hari Shrestha</td>
            <td> hari@test.com </td>
            <td>9841234567</td>
          </tr>
        </tbody>
      </table>
      <hr />

      <h1> JSX loop with Map Function</h1>
      <table border="1">
        <thead>
          <tr>
            <td> ID</td>
            <td> Name</td>
            <td> Email</td>
            <td> Phone</td>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td> {user.id}</td>
              <td> {user.name}</td>
              <td> {user.email}</td>
              <td> {user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />

      <h1>ReUse Component in Loop</h1>
      {userData.map((user) => (
        <div key={user.id}>
          <ReuseComponent data={user} />
        </div>
      ))}
    </div>
  );
}
export default MapFunction;

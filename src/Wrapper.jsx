function Wrapper({ children  }) {
    return (
      <div style={{ border: "2px solid red", margin: "10px", width: "50%" }}>
        <h1> {children} </h1>
      </div>
    );
  }
  export default Wrapper;
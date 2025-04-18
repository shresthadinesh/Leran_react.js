const ReuseComponent = ({ data }) => {
    return (
      <div
        style={{
          border: "1px solid black",
          borderRadius: "8px",
          margin: "10px",
          padding: "10px",
          textAlign: "left",
          width: "400px",
        }}
      >
        <h3>ID: {data.id}</h3>
        <h2>{data.name}</h2>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Phone:</strong> {data.phone}</p>
      </div>
    );
  };
  
  export default ReuseComponent;
  
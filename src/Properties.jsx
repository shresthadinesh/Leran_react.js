function Properties({ userObject }) {
    return (
        <div>
            <h2> Example of Properties </h2>
            <p>Name: {userObject.name}</p>
            <p>Age: {userObject.age}</p>
            <p>Address: {userObject.address}</p>
        </div>
    );
}
export default Properties;
const NestedLoop = () => {
    const collegeData = [
        {
            name: "Kathmandu Engineering College",
            location: "Kalimati",
            courses: ["B.E. Computer", "B.E. Civil", "B.E. Electrical"],
            website: "www.kec.edu.np",
            student: [
                {
                    name: "Dinesh Shrestha",
                    age: 21,
                    address: "Kathmandu"

                },
                {
                    name: "Sita Shrestha",
                    age: 22,
                    address: "Bhaktapur"
                },
                {
                    name: "Ram Shrestha",
                    age: 23,
                    address: "Lalitpur"
                },
                {
                    name: "Hari Shrestha",
                    age: 24,
                    address: "Kirtipur"
                }
            ]
        },
        {
            name: "Pulchowk Engineering College",
            location: "Lalitpur",
            courses: ["B.E. Computer", "B.E. Civil", "B.E. Electrical"],
            website: "www.pulchowk.edu.np",
            student: [
                {
                    name: "Dinesh Shrestha",
                    age: 21,
                    address: "Kathmandu"

                },
                {
                    name: "Sita Shrestha",
                    age: 22,
                    address: "Bhaktapur"
                },
                {
                    name: "Ram Shrestha",
                    age: 23,
                    address: "Lalitpur"
                },
                {
                    name: "Hari Shrestha",
                    age: 24,
                    address: "Kirtipur"
                }
            ]
        },
        {
            name: "Kantipur Engineering College",
            location: "Dhapakhel",
            courses: ["B.E. Computer", "B.E. Civil", "B.E. Electrical"],
            website: "www.kec.edu.np",
            student: [
                {
                    name: "Dinesh Shrestha",
                    age: 21,
                    address: "Kathmandu"

                },
                {
                    name: "Sita Shrestha",
                    age: 22,
                    address: "Bhaktapur"
                },
                {
                    name: "Ram Shrestha",
                    age: 23,
                    address: "Lalitpur"
                },
                {
                    name: "Hari Shrestha",
                    age: 24,
                    address: "Kirtipur"
                }
            ]
        }
    ]
    return (
        <div>
            <h1>College Data</h1>
            {collegeData.map((college, index) => {
                return (
                    <div key={index}>
                        <h2>{college.name}</h2>
                        <p>Location: {college.location}</p>
                        <p>Website: {college.website}</p>
                        <h3>Courses</h3>
                        <ul>
                            {college.courses.map((course, index) => {
                                return <li key={index}>{course}</li>
                            })}
                        </ul>
                        <h3>Students</h3>
                        <table border="1">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {college.student.map((student, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{student.name}</td>
                                            <td>{student.age}</td>
                                            <td>{student.address}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                )
            })}
        </div>
    )
};
export default NestedLoop;
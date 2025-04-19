import React from "react";
import "./ReactForm.css";

const ReactForm = () => {
  const [values, setValues] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    gender: "",
    subject: "",
    resume: null,
    url: "",
    about: "",
  });

  const handleChanges = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      setValues({ ...values, [name]: files[0] });
    } else {
      setValues({ ...values, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const handleReset = () => {
    setValues({
      firstname: "",
      lastname: "",
      email: "",
      contact: "",
      gender: "",
      subject: "",
      resume: null,
      url: "",
      about: "",
    });
  };

  return (
    <div className="container">
      <h1>Form in React</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          placeholder="Enter your first name"
          required
          value={values.firstname}
          onChange={handleChanges}
        />

        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          placeholder="Enter your last name"
          required
          value={values.lastname}
          onChange={handleChanges}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
          value={values.email}
          onChange={handleChanges}
        />

        <label htmlFor="contact">Contact</label>
        <input
          type="text"
          id="contact"
          name="contact"
          placeholder="Enter your contact number"
          required
          value={values.contact}
          onChange={handleChanges}
        />

        <label>Gender</label>
        <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={values.gender === "male"}
              onChange={handleChanges}
            />{" "}
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={values.gender === "female"}
              onChange={handleChanges}
            />{" "}
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="other"
              checked={values.gender === "other"}
              onChange={handleChanges}
            />{" "}
            Other
          </label>
        </div>

        <label htmlFor="subject">Subject</label>
        <select
          name="subject"
          id="subject"
          value={values.subject}
          onChange={handleChanges}
        >
          <option value="">Select a subject</option>
          <option value="english">English</option>
          <option value="maths">Maths</option>
          <option value="science">Science</option>
          <option value="social">Social</option>
          <option value="computer">Computer</option>
        </select>

        <label htmlFor="resume">Resume</label>
        <input
          type="file"
          id="resume"
          name="resume"
          accept=".pdf, .doc, .docx"
          required
          onChange={handleChanges}
        />

        <label htmlFor="url">URL</label>
        <input
          type="url"
          id="url"
          name="url"
          placeholder="Enter your website URL"
          required
          value={values.url}
          onChange={handleChanges}
        />

        <label htmlFor="about">About</label>
        <textarea
          name="about"
          id="about"
          cols="30"
          placeholder="Enter description"
          value={values.about}
          onChange={handleChanges}
        ></textarea>

        <div style={{ display: "flex", gap: "10px" }}>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ReactForm;

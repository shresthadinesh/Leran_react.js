import React, { useState } from "react";
const UserCard = () => {
  const [cardStyle, setCardStyle] = useState({
    border: "1px solid #ccccc3b",
    width: "300px",
    margin: "10px",
    boxshadow: "1px 2px 3px 0px #cccccc57",
  });
  const [textColor, setTextColor] = useState("red");
  const updateTheme = (bgColor, textColor) => {
    setCardStyle({...cardStyle, backgroundColor: bgColor});
  };

  return (
    <div>
      <h1 style={{ color: "orange" }}>User Card using inline CSS</h1>
      <button onClick={()=>updateTheme('gray', 'green')}>Gray Theme</button>
        <button onClick={()=>updateTheme('white', 'black')}>Default Theme</button>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div style={cardStyle} >
          <img
            style={{ width: "300px", height: "300px" }}
            src="https://shresthadinesh1.com.np/assets/about-pic.png"
            alt="Dinesh"
          />
          <div style={{ padding: "5px", color: textColor }}>
            <h2 style={{ color: "Highlight" }}>Dinesh Shrestha</h2>
            <p style={{ color: "CaptionText" }}>Full Stack Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={{ width: "300px", height: "300px" }}
            src="https://shresthadinesh1.com.np/assets/about-pic.png"
            alt="Dinesh"
          />
          <div style={{ padding: "5px" }}>
            <h2 style={{ color: "Highlight" }}>Dinesh Shrestha</h2>
            <p style={{ color: "CaptionText" }}>Full Stack Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={{ width: "300px", height: "300px" }}
            src="https://shresthadinesh1.com.np/assets/about-pic.png"
            alt="Dinesh"
          />
          <div style={{ padding: "5px" }}>
            <h2 style={{ color: "Highlight" }}>Dinesh Shrestha</h2>
            <p style={{ color: "CaptionText" }}>Full Stack Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={{ width: "300px", height: "300px" }}
            src="https://shresthadinesh1.com.np/assets/about-pic.png"
            alt="Dinesh"
          />
          <div style={{ padding: "5px" }}>
            <h2 style={{ color: "Highlight" }}>Dinesh Shrestha</h2>
            <p style={{ color: "CaptionText" }}>Full Stack Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={{ width: "300px", height: "300px" }}
            src="https://shresthadinesh1.com.np/assets/about-pic.png"
            alt="Dinesh"
          />
          <div style={{ padding: "5px" }}>
            <h2 style={{ color: "Highlight" }}>Dinesh Shrestha</h2>
            <p style={{ color: "CaptionText" }}>Full Stack Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={{ width: "300px", height: "300px" }}
            src="https://shresthadinesh1.com.np/assets/about-pic.png"
            alt="Dinesh"
          />
          <div style={{ padding: "5px" }}>
            <h2 style={{ color: "Highlight" }}>Dinesh Shrestha</h2>
            <p style={{ color: "CaptionText" }}>Full Stack Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={{ width: "300px", height: "300px" }}
            src="https://shresthadinesh1.com.np/assets/about-pic.png"
            alt="Dinesh"
          />
          <div style={{ padding: "5px" }}>
            <h2 style={{ color: "Highlight" }}>Dinesh Shrestha</h2>
            <p style={{ color: "CaptionText" }}>Full Stack Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={{ width: "300px", height: "300px" }}
            src="https://shresthadinesh1.com.np/assets/about-pic.png"
            alt="Dinesh"
          />
          <div style={{ padding: "5px" }}>
            <h2 style={{ color: "Highlight" }}>Dinesh Shrestha</h2>
            <p style={{ color: "CaptionText" }}>Full Stack Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={{ width: "300px", height: "300px" }}
            src="https://shresthadinesh1.com.np/assets/about-pic.png"
            alt="Dinesh"
          />
          <div style={{ padding: "5px" }}>
            <h2 style={{ color: "Highlight" }}>Dinesh Shrestha</h2>
            <p style={{ color: "CaptionText" }}>Full Stack Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={{ width: "300px", height: "300px" }}
            src="https://shresthadinesh1.com.np/assets/about-pic.png"
            alt="Dinesh"
          />
          <div style={{ padding: "5px" }}>
            <h2 style={{ color: "Highlight" }}>Dinesh Shrestha</h2>
            <p style={{ color: "CaptionText" }}>Full Stack Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={{ width: "300px", height: "300px" }}
            src="https://shresthadinesh1.com.np/assets/about-pic.png"
            alt="Dinesh"
          />
          <div style={{ padding: "5px" }}>
            <h2 style={{ color: "Highlight" }}>Dinesh Shrestha</h2>
            <p style={{ color: "CaptionText" }}>Full Stack Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={{ width: "300px", height: "300px" }}
            src="https://shresthadinesh1.com.np/assets/about-pic.png"
            alt="Dinesh"
          />
          <div style={{ padding: "5px" }}>
            <h2 style={{ color: "Highlight" }}>Dinesh Shrestha</h2>
            <p style={{ color: "CaptionText" }}>Full Stack Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={{ width: "300px", height: "300px" }}
            src="https://shresthadinesh1.com.np/assets/about-pic.png"
            alt="Dinesh"
          />
          <div style={{ padding: "5px" }}>
            <h2 style={{ color: "Highlight" }}>Dinesh Shrestha</h2>
            <p style={{ color: "CaptionText" }}>Full Stack Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={{ width: "300px", height: "300px" }}
            src="https://shresthadinesh1.com.np/assets/about-pic.png"
            alt="Dinesh"
          />
          <div style={{ padding: "5px" }}>
            <h2 style={{ color: "Highlight" }}>Dinesh Shrestha</h2>
            <p style={{ color: "CaptionText" }}>Full Stack Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={{ width: "300px", height: "300px" }}
            src="https://shresthadinesh1.com.np/assets/about-pic.png"
            alt="Dinesh"
          />
          <div style={{ padding: "5px" }}>
            <h2 style={{ color: "Highlight" }}>Dinesh Shrestha</h2>
            <p style={{ color: "CaptionText" }}>Full Stack Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={{ width: "300px", height: "300px" }}
            src="https://shresthadinesh1.com.np/assets/about-pic.png"
            alt="Dinesh"
          />
          <div style={{ padding: "5px" }}>
            <h2 style={{ color: "Highlight" }}>Dinesh Shrestha</h2>
            <p style={{ color: "CaptionText" }}>Full Stack Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserCard;

import React from "react";
import "./about.scss";

const About = () => {
  return (
    
      <div className="main">
        <div className="about_heading">
          <h1 className="Key_heading">Key Responsibilities</h1>
          <p className="sub_heading">
            A frontend developer specializes in building the user-facing part of
            websites or applications.
          </p>
        </div>

        <div className="about-cardmain">
          <div className="about-card">
            <div className="about-content">
              <p className="about-description">
                Developing the User Interface (UI): Creating the layout,
                navigation, buttons, forms, and all interactive elements that
                users interact with.
              </p>
            </div>
            <img
              className="card_image"
              src="/images/card_image6.jpg"
              alt="Norway"
            />
          </div>
          <div className="about-card">
            <div className="about-content">
              <p className="about-description">
                Enhancing User Experience (UX): Ensuring the application is
                intuitive, responsive, and user-friendly.
              </p>
            </div>
            <img
              className="card_image"
              src="/images/card_image10.jpg"
              alt="Norway"
            />
          </div>
          <div className="about-card">
            <div className="about-content">
              <p className="about-description">
                Implementing Responsive Design: Making websites or applications
                work seamlessly on various devices (desktops, tablets, and
                mobile phones).
              </p>
            </div>
            <img
              className="card_image"
              src="/images/card_image7.jpg"
              alt="Norway"
            />
          </div>
        </div>
      </div>
    
  );
};

export default About;

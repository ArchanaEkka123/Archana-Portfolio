import React from "react";
import "./about.scss";

const About = () => {
  return (
    
      <div className="main">
        <div className="about_heading">
          <p className="Key_heading">Key Responsibilities</p>
          <p className="sub_heading">
            A frontend developer specializes in building the user-facing part of
            websites or applications.
          </p>
        </div>

        <div className="cardmain">
          <div className="card">
            <div className="content">
              <p className="description">
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
          <div className="card">
            <div className="content">
              <p className="description">
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
          <div className="card">
            <div className="content">
              <p className="description">
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

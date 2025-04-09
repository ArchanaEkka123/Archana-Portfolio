import React from "react";
import "./home.scss";
import About from "./about";
import Services from "./services";
 import ImageSlider from "./ImageSlider";
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="main_outter">
      <div className="main">
        <div className="sec">
        <motion.div
      initial={{ x: '-600px' }}  // Start off-screen to the left
      animate={{ x: 0 }}         // Animate to its normal position (0, meaning no offset)
      transition={{ duration: 2 }} // Duration of 2 seconds
    >
          <div className="left_sec">
           

            <img
              className="myimage"
              src="/images/image5.jpeg"
              
              alt="Description of the image"
            />

          </div>
          </motion.div>

          <motion.div
      initial={{ x: '+600px' }}  // Start off-screen to the left
      animate={{ x: 0 }}         // Animate to its normal position (0, meaning no offset)
      transition={{ duration: 2 }} // Duration of 2 seconds
    >
          <div className="right_sec">
            <div>
              <p className="line">Hi, I'm Archana Ekka</p>
              <p className="designation">Fontend Developer</p>
            </div>
            <div className="contact">
              
              <div className="contact_caintainer">
                <img
                  className="icon"
                  src="/images/mail-icon.png"
                  alt="Description of the image"
                />

                <p className="Description">archanaekka97555@gmail.com</p>
              </div>

              <div className="contact_caintainer">
                <img
                  className="icon"
                  src="/images/house-icon.png"
                  alt="Description of the image"
                />
                <p className="Description">Sankar Nagar Raipur</p>
              </div>
            </div>
            
          </div>
          </motion.div>
        </div>
        <div className="sec2">
        <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
    >
        <h1 className="Keyheading">
          Technical Skills
        </h1>
        </motion.div>

        <div className="cardmain">
       
          <div className="card">
           
            
            <div className="content">
              <p className="content_heading">
                <b>Languages</b>
              </p>
              <p className="description">HTML5/CSS/JavaScript (ES6+)</p>
            </div>
            <img
              className="card_image"
              src="/images/card_image1.jpg"
              alt="Description of the image"
            />
          </div>
          <div className="card">
          <div className="content">
              <p className="content_heading">
                <b>Frameworks & Libraries</b>
              </p>
              <p className="description">
                React.js: Build dynamic user interfaces with reusable
                components.
              </p>
            </div>
            <img
              className="card_image"
              src="/images/card_image8.jpg"
              alt="Norway"
            />
 
           
          </div>
          <div className="card">
          <div className="content">
              <p className="content_heading">
                <b>Responsive Design</b>
              </p>
              <p className="description">
                Media queries, flexible grids, and tools like CSS frameworks to
                ensure compatibility across devices.
              </p>
            </div>
            <img
              className="card_image"
              src="/images/card_image5.jpg"
              alt="Norway"
            />

            
          </div>
        </div>

        </div>
       
        <About/>
       <Services/>
       <ImageSlider/>
      </div>
      
    </div>
  );
};

export default Home;

import React from "react";
import "./contact.scss";
import ContactForm from "./contacformt";

import { motion } from "framer-motion";
import ImageSlider from "./ImageSlider";
const Contact = () => {
  return (
    <div class="main">
      <div class="sec">
        <div class="right_sec">
          <div>
            <p class="line">Archana Ekka</p>
          </div>

          <div class="contact">
            <div class="contact_caintainer">
              <img
                class="icon"
                src="/images/call-icon.png"
                alt="Description of the image"
              />
              <p class="Description">9772144125</p>
            </div>
            <div class="contact_caintainer">
              <img
                class="icon"
                src="/images/mail-icon.png"
                alt="Description of the image"
              />

              <p class="Description">archanaekka97555@gmail.com</p>
            </div>
            <div class="contact_caintainer">
              <img
                class="icon"
                src="/images/icons-linkedin.svg"
                alt="Description of the image"
              />

              <a href="https://www.linkedin.com/in/archana-ekka-99a563333/">
                {" "}
                Linkedin
              </a>
            </div>
            <div class="contact_caintainer">
              <img
                class="icon"
                src="/images/house-icon.png"
                alt="Description of the image"
              />
              <p class="Description">Sankar Nagar Raipur</p>
            </div>
          </div>
        </div>
        <div class="left_sec">
          {/* <img
            class="myimage"
            src="/images/image7.jpeg"
            alt="Description of the image"
          /> */}
          <motion.img
        src="/images/image7.jpeg"
        alt="Floating Image" width={320} height={420}
        className=" myimage w-64 h-64 rounded-lg shadow-lg"
        animate={{
          y: [0, -20, 0], // Floating effect (up and down)
          scale: [1, 1.05, 1], // Pulsing effect (bigger and smaller)
        }}
        transition={{
          duration: 3, // Total duration of the animation cycle
          repeat: Infinity, // Makes the animation loop forever
          repeatType: "loop", // Ensures smooth looping
          ease: "easeInOut", // Smooth easing
        }}
      />
        </div>
      </div>
      {/* contactformbg */}
      <div class="test">
         <ContactForm/>
          
        </div>
      
    </div>
  );
};

export default Contact;

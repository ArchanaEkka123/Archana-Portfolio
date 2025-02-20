import React from "react";
import "./footer.scss";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer_logo">
               <img
                class="icon"
                src="/images/A_logo.svg"
                alt="Description of the image"
                width={100}
                height={100}
              />
        </div>
       
        <div className="footer-links">
          <ul>
            <li>
              <Link to="/about">About Us</Link>
              </li>
            <li>
            <Link to="/ImageSlider">Privacy Policy</Link>
              
              </li>
            <li> <Link to="/contact">Terms of Service</Link>
             </li>
            <li><Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-socials">
        
          <a href="https://www.facebook.com/archana.ekka.77" className="social-icon">
          <img
                class="socials-icon"
                src="/images/facebook.svg"
                alt="Description of the image"
                width={50}
                height={50}
              />

          </a>
          <a href="https://www.linkedin.com/in/archana-ekka-99a563333/" className="social-icon"> <img
                class="socials-icon"
                src="/images/linkedin.svg"
                alt="Description of the image"
                width={50}
                height={50}
              /></a>
          <a href="https://www.instagram.com/archanaekka00/" className="social-icon"> 
          <img
                class="socials-icon"
                src="/images/instagram.svg"
                alt="Description of the image"
                width={50}
                height={50}
              /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 YourCompany. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

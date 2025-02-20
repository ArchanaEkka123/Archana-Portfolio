import React from "react";
import "./home.scss";



const Home = () => {
  return (
    <div className="main_outter">
      <div className="main">
        <div className="sec">
          <div className="left_sec">
            {/* <img src={MyImage} alt="Description of Image" width={300} height={400} /> */}

            <img
              className="myimage"
              src="/images/image5.jpeg"
              
              alt="Description of the image"
            />

{/* <div style={{ display: "flex", gap: "10px" }}>
        {images.map((image) => (
          <div key={image.id}>
            <img src={image.src} alt={image.alt} style={{ width: "150px", height: "100px" }} />
            <p>{image.title}</p>
          </div>
        ))}
      </div> */}


          </div>
          <div className="right_sec">
            <div>
              <p className="line">Hi, I'm Archana Ekka</p>
              <p className="designation">Fontend Developer</p>
            </div>
            <div className="contact">
              <div className="contact_caintainer">
                <img
                  className="icon"
                  src="/images/call-icon.png"
                  alt="Description of the image"
                />
                <p className="Description">9772144125</p>
              </div>
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
        </div>
        <h1 className="Keyheading">
          Technical Skills
        </h1>
        <div className="cardmain">
          <div className="card">
            <img
              className="card_image"
              src="/images/card_image1.jpg"
              alt="Description of the image"
            />
            {/* <img src={MyImage1} alt="Description of Image" width={300} height={400} /> */}
            <div className="content">
              <p className="content_heading">
                <b>Languages</b>
              </p>
              <p className="description">HTML5/CSS/JavaScript (ES6+)</p>
            </div>
          </div>
          <div className="card">
            <img
              className="card_image"
              src="/images/card_image8.jpg"
              alt="Norway"
            />
 {/* <img src={MyImage2} alt="Description of Image" width={300} height={400} /> */}
            <div className="content">
              <p className="content_heading">
                <b>Frameworks & Libraries</b>
              </p>
              <p className="description">
                React.js: Build dynamic user interfaces with reusable
                components.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              className="card_image"
              src="/images/card_image5.jpg"
              alt="Norway"
            />
{/* <img src={MyImage3} alt="Description of Image" width={300} height={400} /> */}
            <div className="content">
              <p className="content_heading">
                <b>Responsive Design</b>
              </p>
              <p className="description">
                Media queries, flexible grids, and tools like CSS frameworks to
                ensure compatibility across devices.
              </p>
            </div>
          </div>
        </div>
       
      </div>
     
    </div>
  );
};

export default Home;

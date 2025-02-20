import React, { useState } from "react";
 import "./ImageSlider.scss";

//array of object
function GridSlider() {
  const images = [
    "/images/image6.jpeg",
    "/images/image2.jpeg",
    "/images/image1.jpeg",
    "/images/image7.jpeg",

    "/images/image8.jpeg",
    "/images/image9.jpeg",
    "/images/image5.jpeg",
    "/images/image4.jpeg",

    "/images/image3.jpeg",
    "/images/image4.jpeg",
  ];

  const [startIndex, setStartIndex] = useState(0);
  const itemsPerSlide = 4;

  const nextSlide = () => {
    setStartIndex((prevIndex) =>
      prevIndex + itemsPerSlide >= images.length ? 0 : prevIndex + itemsPerSlide
    );
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) =>
      prevIndex - itemsPerSlide < 0
        ? images.length - itemsPerSlide
        : prevIndex - itemsPerSlide
    );
  };

  const currentImages = images
    .slice(startIndex, startIndex + itemsPerSlide)
    .concat(
      images.slice(0, Math.max(0, startIndex + itemsPerSlide - images.length))
    );

  return (
    <div className="container">
      <button onClick={prevSlide} className="slide_button">
        ❮
      </button>
      <div className="grid">
        {currentImages.map((img, index) => (
          <img
            src={img}
            key={index}
            alt={`Slide ${index + 1}`}
            width={300}
            height={400}
            className="grid_image"
          />
        ))}
      </div>
      <button onClick={nextSlide} className="slide_button">
        ❯
      </button>
    </div>
    // <div style={styles.container}>
    //   <button onClick={prevSlide} style={styles.button}>
    //     ❮
    //   </button>
    //   <div style={styles.grid}>
    //     {currentImages.map((img, index) => (
    //       <img key={index} src={img} alt={`Slide ${index + 1}`} style={styles.image} />
    //     ))}
    //   </div>
    //   <button onClick={nextSlide} style={styles.button}>
    //     ❯
    //   </button>
    // </div>
  );
}

// const styles = {
//   container: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     position: "relative",
//     width: "80%",
//     margin: "95.5px auto",
//     overflow: "hidden",
//   },
//   grid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(4, 1fr)",
//     gap: "10px",
//     width: "100%",
//     padding: "10px",
//   },
//   image: {
//     width: "100%",
//     borderRadius: "8px",
//   },
//   button: {
//     background: "rgba(0, 0, 0, 0.5)",
//     color: "white",
//     border: "none",
//     padding: "10px",
//     cursor: "pointer",
//     fontSize: "18px",
//     borderRadius: "5px",
//     zIndex: 1,
//   },
// };

export default GridSlider;

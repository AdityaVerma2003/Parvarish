import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Img1 from "../../assets/gimg/g1.jpg";
import Img2 from "../../assets/gimg/g2.jpg";
import Img3 from "../../assets/gimg/g3.jpg";
import Img4 from "../../assets/gimg/g4.jpg";
import Img5 from "../../assets/gimg/g5.jpg";
import Img6 from "../../assets/gimg/g6.jpg";
import Img7 from "../../assets/gimg/g7.jpg";
import Img8 from "../../assets/gimg/g8.jpg";
import Img9 from "../../assets/gimg/g9.jpg";
import Img10 from "../../assets/gimg/g10.jpg";
import Img11 from "../../assets/gimg/g11.jpg";
import Img12 from "../../assets/gimg/g12.jpg";
import Img13 from "../../assets/gimg/g13.jpg";
import Img14 from "../../assets/gimg/g14.jpg";
import Img15 from "../../assets/gimg/g15.jpg";
import Img16 from "../../assets/gimg/g16.jpg";
import Img17 from "../../assets/gimg/g17.jpg";
import Img18 from "../../assets/gimg/g18.jpg";
import Img19 from "../../assets/gimg/g19.jpg";
import Img20 from "../../assets/gimg/g20.jpg";
import Img21 from "../../assets/gimg/g21.jpg";

const imgsrcs = [
  {
    original: Img1,
    thumbnail : Img1,
  },
  {
    original: Img2,
    thumbnail : Img2,
  },
  {
    original: Img3,
    thumbnail : Img3,
  },
  {
    original: Img4,
    thumbnail : Img4,
  },
  {
    original: Img5,
    thumbnail : Img5,
  },
  {
    original: Img6,
    thumbnail : Img6,
  },
  {
    original: Img7,
    thumbnail : Img7,
  },
  {
    original: Img8,
    thumbnail : Img8,
  },
  {
    original: Img9,
    thumbnail : Img9,
  },
  {
    original: Img10,
    thumbnail : Img10,
  },
  {
    original: Img11,
    thumbnail : Img11,
  },
  {
    original: Img12,
    thumbnail : Img12,
  },
  {
    original: Img13,
    thumbnail : Img13,
  },
  {
    original: Img14,
    thumbnail : Img14,
  },
  {
    original: Img15,
    thumbnail : Img15,
  },
  {
    original: Img16,
    thumbnail : Img16,
  },
  {
    original: Img17,
    thumbnail : Img17,
  },
  {
    original: Img18,
    thumbnail : Img18,
  },
  {
    original: Img19,
    thumbnail : Img19,
  },
  {
    original: Img20,
    thumbnail : Img20,
  },
  {
    original: Img21,
    thumbnail : Img21,
  },
];

const G2 = () => {

  return (
    <>
    <div className='heading'><h2>Gallery</h2></div>
    <ImageGallery items={imgsrcs} />
    </>
  );
};

export default G2;
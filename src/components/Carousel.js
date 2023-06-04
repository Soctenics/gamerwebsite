import React,{ useState } from "react";
import "../styles/styleone.css";
// import Card from "./Card.js";
import Slider from "react-slick";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";

const photos = [
  {
    id: "p1",
    title: "Photo One",
    url: "https://www.kindacode.com/wp-content/uploads/2022/08/1.png",
  },
  {
    id: "p2",
    title: "Photo Two",
    url: "https://www.kindacode.com/wp-content/uploads/2022/08/2.png",
  },
  {
    id: "p3",
    title: "Photo Three",
    url: "https://www.kindacode.com/wp-content/uploads/2022/08/3.jpg",
  },
  {
    id: "p4",
    title: "Photo Four",
    url: "https://www.kindacode.com/wp-content/uploads/2022/08/4.jpg",
  },
];

function Carousel() {
 

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <HiChevronRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <HiChevronLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    dots:true,
    infinite: true,
    lazyLoad: true,
    speed: 900,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="cApp">
      <Slider {...settings}>
          {
            photos.map((item, idx)=>(
              <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                <img src={item.url} alt={item.title} className="photo" />
                <h1>{item.title}</h1>
              </div>
            ))
          }
        </Slider>
      
    </div>
  );
}

export default Carousel;

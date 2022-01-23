import './carousel.css';
import { useState } from 'react';
import Slider from 'react-slick';

import omori from '../../assets/omori.jpeg';
import omori2 from '../../assets/omori2.jpeg'; 

import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const images = [ omori, omori2, omori, omori2];

function Carousel() {

  const NextArrow = ({onClick}) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    )
  };

  const PrevArrow = ({onClick}) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    )
  };

  const [ImageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (curr, next) => setImageIndex(next)
  }


  return (
    <div className="carousel">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className={index === ImageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={img} />
          </div>
        ))
        }
      </Slider>
    </div>
  );
}

export default Carousel;

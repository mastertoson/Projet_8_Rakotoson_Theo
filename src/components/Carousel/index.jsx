import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import left from '../../assets/images/vector-left.svg'
import right from '../../assets/images/vector-right.svg'
import axios from 'axios'

function Carrousel() {
  const logement = useParams();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentCarousel, setCurrentCarousel] = useState([]);

  useEffect(() => {
    axios.get("../../logements.json").then((response) => {
      const filteredImages = response.data.find((item) => item.id === logement.id)
      if (filteredImages === undefined) {
        setCurrentCarousel([]);
      } else {
        setCurrentCarousel(filteredImages.pictures);
      }
    });
  }, [logement.id])

  const length = currentCarousel.length;

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === length - 1 ? 0 : prevSlide + 1
    )
  }

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? length - 1 : prevSlide - 1
    )
  }

  return (
    <div className="carrousel">
      {length > 1 && (
        <img src={left} alt="gauche" onClick={prevSlide} className="leftArrow" />
      )}

      {length > 1 && (
        <img src={right} alt="droite" onClick={nextSlide} className="rightArrow" />
      )}

      {currentCarousel.map((slide, index) => (
        <div
          key={index}
          className={currentSlide === index
          ? "slider  active-anim"
          : "slider "}
        >
          {currentSlide === index && <img src={slide} alt="appartement à louer" />}
          {currentCarousel.length > 1 && currentSlide === index && (
            <span className="slider__number">
              {currentSlide + 1}/{length}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

export default Carrousel;
import React from 'react';
import './Slider.css';
const Slider = () => {
  const slides = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Yc_4Ojq3tB49TliSSRkTzzy_3aiR7bUIBA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWCZL10kDopD36bQAe5mb5XufrJxnyL79HEg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6jYY8e7j1sNpH7vwwO-iwE-kVwtOSZM9Bu9Tfw7zwiEIPUphb9SQMTZeNHBli3ixmi30&usqp=CAU',

    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzN4YBqIkcFRm-PrOd6unvDZZ32DVs96P1SA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfKoCO_iPuhZIaICES1otJR-UDWZHnersKcA&usqp=CAU',
  ];
  const [slideImg, setSlideImg] = React.useState(0);

  const nextSlide = () => {
    if (slideImg === slides.length - 1) return setSlideImg(0);
    setSlideImg((prev) => prev + 1);
    
  };
  const prevSlide = () => {
    if (slideImg === 0) return setSlideImg(slides.length-1);
    setSlideImg((prev) => prev - 1);

  };

  return (
    <div className="wrap">
      <div className="slider">
        <button
          className="slider__prev-button toggle"
          onClick={prevSlide}
        ></button>
        <button
          className="slider__next-button toggle "
          onClick={nextSlide}
        ></button>
        <div className="slider__left-banner">
          <div className="slider__brand">
            <img src="img/brand.png" alt="brand" />
          </div>
          <div className="slider__title">
            <span>Stan Smith,</span>
            <span style={{ color: 'black' }}>Forever!</span>
          </div>
          <button className="slider__purchase-button">КУПИТЬ</button>
        </div>
        <div className="slider__picture">
          <img src={slides[slideImg]} alt="slide" />
        </div>
      </div>
    </div>
  );
};

export default Slider;

import React from 'react';
import Slider from 'react-slick';
import Button from '../components/Button';
import '../styles/Modal.css';

const Modal = ({ project, onClose }) => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <Slider {...sliderSettings}>
          {project.images.map((image, index) => (
            <div key={index} className="slider-item">
              <img src={image} alt={`${project.title} - ${index}`} className="modal-image" />
            </div>
          ))}
        </Slider>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <Button text="X" onClick={onClose} className="close-button"/>
        {/* <button onClick={onClose} className="close-button">X</button> */}
      </div>
    </div>
  );
};

export default Modal;

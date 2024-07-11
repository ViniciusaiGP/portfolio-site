import React from 'react';
import '../styles/Card.css';

const Card = ({ title, description, image, onClick, className = "card-image" }) => {
    return (
        <div className="card" onClick={onClick}>
            <img src={image} alt={title} className={className} />
            {title && <h3>{title}</h3>}
            {description && <p>{description}</p>}
        </div>
    );
};

export default Card;



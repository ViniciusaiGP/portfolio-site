import React from 'react';
import '../styles/Button.css';

const Button = ({ children, onClick, className, icon, text }) => {
  return (
    <button onClick={onClick} className={`button ${className} ${icon ? 'button-icon-only' : ''}`}>
      {icon && <span className="button-icon">{icon}</span>}
      {text && <span className="button-text">{text}</span>}
      {!icon && !text && children}
    </button>
  );
};

export default Button;

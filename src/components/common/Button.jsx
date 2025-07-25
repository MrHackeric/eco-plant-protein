// src/components/common/Button.jsx
import React from 'react';
import './Button.css';

const Button = ({ children, variant = 'primary', ...props }) => {
  return (
    <button className={`btn ${variant}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
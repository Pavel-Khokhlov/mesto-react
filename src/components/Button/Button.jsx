import React from 'react';
import "./Button.css";

const Button = ({ type, className, arial_label, onClick, children, isValid }) => {
  return (
    <button disabled={isValid} type={type} className={className} arial-label={arial_label} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

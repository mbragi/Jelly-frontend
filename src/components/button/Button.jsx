import React from 'react';
import "./Button.css";
function Button({content, ...otherProps}) {
    return(
        <button {...otherProps} className="custom-button">{content}</button>
    );
}

export default Button;
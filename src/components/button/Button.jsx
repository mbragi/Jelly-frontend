import React from 'react';
import "./Button.css";
function Button({ content, id, ...otherProps }) {
    return (
        <button {...otherProps} className="custom-button" id = {id}>{content}</button>
    );
}

export default Button;
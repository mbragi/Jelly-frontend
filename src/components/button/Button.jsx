import React from 'react';
import "./Button.css";
function Button({ content, id, ...otherProps }) {
    return (
        <div>
            {/* BUTTON 1 */}
            {/* <button {...otherProps} className="custom-button" id = {id}>{content}</button> */}


            {/* BUTTON 2 */}
        <div className="container">
            <button {...otherProps} className="custom-button" id = {id}>{content}</button>
        </div>


        </div>
    );
}

export default Button;
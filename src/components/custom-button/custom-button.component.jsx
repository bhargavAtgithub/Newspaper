import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({buttonName}) => (
    <div className="custom-button" >
        <button >{buttonName}</button>
    </div>
);


export default CustomButton;
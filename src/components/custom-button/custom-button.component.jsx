import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({buttonName, onClickChangeSection}) => (
    <div className="custom-button" >
        <button >{buttonName}</button>
    </div>
);


export default CustomButton;
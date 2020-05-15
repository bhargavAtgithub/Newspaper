import React from 'react';

import './label.styles.scss';

const Label = ({label, type}) => {
    if (type){
        var label_type = type;
    }else {
        label_type = ''
    }
    return(
    <div className={`label ${label_type}`}>
            <span>{label}</span>
        </div>
)};
 
export default Label;
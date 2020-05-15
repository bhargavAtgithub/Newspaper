import React from 'react';

import './card.styles.scss';

import Label from '../label/label.component';

const Card =(props) => (
    <div className='card'> 
        {   
            props.label &&
            <Label label={props.label} />
        } 
        <div className='card-content'>
            <div className = 'image'>
                {
                    props.imageURL &&
                    <img src={props.imageURL} alt="display" />
                }
            </div>
            <div className = 'content'>
                {
                    props.text &&
                    props.text.map((text,i) => (
                        <li key={i} className="text-list">
                            <span className='text'>{text}</span>
                        </li>
                    ))
                }
            </div>
        </div>
    </div>
);
    
export default Card;
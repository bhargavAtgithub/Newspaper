import React from 'react';

import './logo.styles.scss';

import Label from '../label/label.component.jsx';

const Logo = ({application}) => (
    <div className='logo'>
        <div className="brand">
            <div className='vertical-text'>
                <span>THE</span>
            </div>
            <div className='horizontal-text'>
                    <span>GOOD</span>
                    <span>CODE</span>
            </div>
            <div className="seperator">
                <span>|</span>
            </div>
        </div>
        <Label label={"NEWSPAPER"} type={"title"}/>
    </div> 
);

export default Logo;
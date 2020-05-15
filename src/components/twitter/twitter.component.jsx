import React from 'react';

import './twitter.styles.scss';

import twitter from './twitter.data';

import Card from '../card/card.component';

const Twitter = () => {
    var {trending} = twitter;
    return(
    <div className='Twitter' >
        <Card 
            label={"Twitter"} 
            text={trending}
        />
    </div>
)};

export default Twitter;
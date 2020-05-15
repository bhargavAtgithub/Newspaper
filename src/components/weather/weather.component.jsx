import React from 'react';

import './weather.styles.scss';

import Card from '../card/card.component';

import weather from './weather.data';

const Weather = () => {
    var {weather: [{description,imageURL}], main:{temp},name}= weather;
    return(
    <div className='weather'>
        <Card 
            label={"Weather"}
            imageURL = {imageURL}
            text = {[description,"temperature: "+temp,"location: "+name]}
        />
    </div>
)};

export default Weather;

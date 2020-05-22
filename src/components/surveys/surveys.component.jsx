import React from 'react';

import './surveys.styles.scss';

import Card from '../card/card.component';

const Surveys = () => (
    <div className='surveys'>
        <Card label = {'Surveys'} text = {
            [
                "No surveys availble right now.",
                "This section will link to the important surveys which help researches."
            ]
        }
        />
    </div>
);

export default Surveys;
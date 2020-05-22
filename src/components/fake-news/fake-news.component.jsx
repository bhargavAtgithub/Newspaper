import React from 'react';

import './fake-news.styles.scss';

import Card from '../card/card.component';

const FakeNews = () => (
    <div className='fake-news'>
        <Card label={"Fake News"} text = {
            [
                "Under development",
                "The illusory effect: the fact that if a lie is repeated enough times, you’ll begin to believe it’s true.",
                "With so much false information, consumers are skeptical and it erodes the trust they should have in the media."
            ]
        }
        />
    </div>
);

export default FakeNews;
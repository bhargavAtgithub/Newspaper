import React from 'react';
import './card-collection.styles.scss';

import Card from '../card/card.component';

import Label from '../label/label.component';

const CardCollection = ({cards_data}) => {
        const articles = cards_data;
        return(
            <div className='card-collection'>  
                <div className='collection-title'>
                    <Label label={"Headlines"} />
                </div>
                <ul className='cards'>
                    {
                        articles.map((article, i) => (
                            <div key = {i}>
                                <Card 

                                text={[article.title]}
                                //description={article.description}
                                //author={article.author}
                                />
                            </div>
                        ))                
                    }
                </ul>
            </div>
    )
};


export default CardCollection;
import React from 'react';

import './news.styles.scss';

import CardCollection from '../card-collection/card-collection.component';

import CategoriesCollection from '../categories_collection/categories_collection.component';

import data from '../../articles';

class News extends React.Component {
    state = {
        data: data["articles"]
    } 
    
    render(){
        return(
            <div className='news'>
                <CategoriesCollection />
                <CardCollection cards_data = {this.state.data}/>
            </div>
        );
    }
};

export default News;
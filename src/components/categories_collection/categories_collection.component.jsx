import React from 'react';

import './categories_collection.styles.scss';

import CustomButton from '../custom-button/custom-button.component';

const CategoriesCollection = () => (
    <div className="CategoriesCollection">
        <CustomButton buttonName="Current Events" />
        <CustomButton buttonName="Environmental" />
        <CustomButton buttonName="Technology" />
        <CustomButton buttonName="Sports" />
        <CustomButton buttonName="Entertainment" />
    </div>
);

export default CategoriesCollection;
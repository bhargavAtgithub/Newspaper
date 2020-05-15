import React from 'react';

import './navigator.styles.scss';

import CustomButton from '../custom-button/custom-button.component';

const Navigator = (props) => (
    <div className='navigator'>
        <div className="mobile-nav">
            <div className="page1" onClick={(e) => props.onClickChangeSection(e, "page1")}>
                <CustomButton buttonName={"page1"} />
            </div>
            <div className="page2" onClick={(e) => props.onClickChangeSection(e, "page2")}>
                <CustomButton buttonName={"page2"} />
            </div>
            <div className="page3" onClick={(e) => props.onClickChangeSection(e, "page3")}>
                <CustomButton buttonName={"page3"} />
            </div>
        </div>
        <div className='container'>
            <CustomButton buttonName={"About"} />
            <CustomButton buttonName={"Feedback"} />
            <CustomButton buttonName={"The Good Code"} />
            <CustomButton buttonName={"Dark/Light"} />
            <CustomButton buttonName={"Refresh"} />
        </div>
    </div>
);

export default Navigator;
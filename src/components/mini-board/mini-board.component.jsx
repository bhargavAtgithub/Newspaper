import React from 'react';

import './mini-board.styles.scss';

const MiniBoard = (props) => (
    <section className={`miniboard ${props.status}`} >
        {props.children}
    </section>
);

export default MiniBoard;
import React from 'react';
import './techitem.css';

const techItem = (props) => {
    return (
        <div className="techitem">
            <div className="logo">
                <img src={props.src} width="100%" />
            </div>
            <div className="title">{props.title}</div>
        </div>
    );
}

export default techItem;
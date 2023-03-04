import './style.css';
import React from 'react';

export const SchemeColor = ({colorNumber}) => {
    return (
    <div className="scheme-color" style={{ backgroundColor: `${colorNumber}` }} >{colorNumber}
    </div> )
}

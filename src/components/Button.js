import React from 'react';

export default ({text, onClick, className = ''}) => (
    <button className={className} onClick={() => { onClick() }}>{text}</button>
);

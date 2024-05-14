// FloatingHearts.js
import React from 'react';
import './FloatingHearts.css';

const FloatingHearts = () => {
    return (
        <div className="floating-hearts">
            {Array.from({ length: 10 }).map((_, index) => (
                <div key={index} className="heart"></div>

            ))}
        </div>
    );
};

export default FloatingHearts;

import React from 'react';

const Genre = ({ name, imgSrc }) => {
    return (
        <div className="genre">
            <img src={imgSrc} alt={name} className="genre-img" />
            <p>{name}</p>
        </div>
    );
};

export default Genre;

import React from 'react';

const PopularArtist = ({ name, imgSrc }) => {
    return (
        <div className="popular-artist">
            <img src={imgSrc} alt={name} />
            <h3>{name}</h3>
        </div>
    );
};

export default PopularArtist;

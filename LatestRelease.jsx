import React from 'react';

const LatestRelease = ({ title, date, imgSrc, Info }) => {
    return (
        <div className="latest-release">
            <img src={imgSrc} alt={title} />
            <h3>{title}</h3>
            <p>{date}</p>
            <p>{Info}</p>
        </div>
    );
};

export default LatestRelease;

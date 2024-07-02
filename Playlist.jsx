import React from 'react';


const Playlist = ({ title, imgSrc }) => {
    return (
        <div className="playlist">
            <img src={imgSrc} alt={`${title} Cover`} />
            <div className="playlist-info">
                <h3>{title}</h3>
            </div>
        </div>
    );
};

export default Playlist;

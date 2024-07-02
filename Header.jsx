import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import profile from './images/profile.jpeg';
import spotifyLogo from './images/logo image.png'; // Import the Spotify logo

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={spotifyLogo} alt="Spotify Logo" className="spotify-logo" /> Spotify{/* Add the logo image */}
            </div>
            <nav className="nav">
                <a href="/">Home</a>
                <a href="/">Favourites</a>
                <input type="text" placeholder="Search..." className='search-bar' />
            </nav>
            <div className="nav-icons">
                <FontAwesomeIcon icon={faBell} className="bell-icon" />
            </div>
            <div className="profile-pic">
                <img src={profile} alt="Profile" />
            </div>
        </header>
    );
};

export default Header;

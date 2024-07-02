import React from 'react';
import Playlist from './Playlist';
import LatestRelease from './LatestRelease';
import PopularArtist from './PopularArtist';
import Genre from './Genre';

import cover1 from './images/cover1.jpeg';
import cover2 from './images/cover2.jpeg';
import cover3 from './images/cover3.jpg';
import artist1 from './images/artist1.jpeg';
import artist2 from './images/artist2.jpeg';
import artist3 from './images/artist3.jpeg';
import artist4 from './images/artist4.jpg';
import artist5 from './images/artist5.jpg';
import artist6 from './images/artist6.jpg';
import artist7 from './images/artist7.jpg';
import artist8 from './images/artist8.jpg';
import artist9 from './images/artist9.jpg';
import artist10 from './images/artist10.jpg';
import artist11 from './images/artist11.jpg';
import artist12 from './images/artist12.jpg';
import image1 from './images/image1.jpg';
import image3 from './images/image3.jpg';
import genre1 from './images/genre1.jpg';
import genre2 from './images/genre2.jpeg';
import genre3 from './images/genre3.jpeg';
import genre4 from './images/genre4.jpeg';
import genre5 from './images/genre5.jpeg';
import genre6 from './images/genre6.jpeg';
import genre7 from './images/genre7.jpeg';
import genre8 from './images/genre8.jpeg';
import latest1 from './images/latest1.jpeg';
import latest2 from './images/latest2.jpeg';
import latest3 from './images/latest3.jpeg';
import latest4 from './images/latest4.jpeg';
import latest5 from './images/latest5.jpeg';
import latest6 from './images/latest6.jpeg';
import latest7 from './images/latest7.jpeg';
import latest8 from './images/latest8.jpeg';
import latest9 from './images/latest9.jpeg';
import latest10 from './images/latest10.jpeg';
import latest11 from './images/latest11.jpeg';
import latest12 from './images/latest12.jpeg';
import latest13 from './images/latest13.jpeg';
import latest14 from './images/latest14.jpeg';
import latest15 from './images/latest15.jpeg';
import latest16 from './images/latest16.jpg';
import latest17 from './images/latest17.png';
import latest18 from './images/latest18.jpeg';
import latest19 from './images/latest19.jpeg';
import latest20 from './images/latest20.jpeg';

const MainContent = () => {
    return (
        <div className="main-content">
            <div className="playlists-section">
                <h2>Musical Covers</h2>
                <div className="playlists">
                    <Playlist title="Latin Party Anthems" imgSrc={cover1} />
                    <Playlist title="Mood Booster" imgSrc={cover2} />
                    <Playlist title="EDM" imgSrc={cover3} />
                </div>
            </div>
            <div className="latest-release-section">
                <h2>Latest Release</h2>
                <div className="release-info">
                    <LatestRelease title="Onism" date="Aug 11, 2017" imgSrc={artist2} Info="...  5:46" />
                    <LatestRelease title="Shape of You" date="Aug 11, 2017" imgSrc={artist1} Info="...  4:18" />
                    <LatestRelease title="Onism" date="Aug 11, 2017" imgSrc={image1} Info="...  3:45" />
                    <LatestRelease title="Shape of You" date="Aug 11, 2017" imgSrc={image3} Info="...  2:17" />
                </div>
            </div>
            <div className="popular-artists-section">
                <h2>Popular Artists</h2>
                <div className="artists-grid">
                    <PopularArtist name="Ed Sheeran" imgSrc={artist1} />
                    <PopularArtist name="Taylor Swift" imgSrc={artist2} />
                    <PopularArtist name="Shakira" imgSrc={artist3} />
                    <PopularArtist name="Justin Bieber" imgSrc={artist4} />
                    <PopularArtist name="Selena Gomez" imgSrc={artist5} />
                    <PopularArtist name="Martin Garrix" imgSrc={artist6} />
                    <PopularArtist name="Ariana Grande" imgSrc={artist7} />
                    <PopularArtist name="Arijit Singh" imgSrc={artist8} />
                    <PopularArtist name="Armaan Malik" imgSrc={artist9} />
                    <PopularArtist name="Shreya Ghoshal" imgSrc={artist10} />
                    <PopularArtist name="Atif Aslam" imgSrc={artist12} />
                    <PopularArtist name="Harry Styles" imgSrc={artist11} />
                </div>
            </div>
            <div className="genre-section">
                <h2>Genres</h2>
                <div className="genre-grid">
                    <Genre name="Music" imgSrc={genre1} />
                    <Genre name="Love" imgSrc={genre2} />
                    <Genre name="Retro" imgSrc={genre3} />
                    <Genre name="Chill" imgSrc={genre4} />
                    <Genre name="Work" imgSrc={genre5} />
                    <Genre name="Dev" imgSrc={genre6} />
                    <Genre name="Old" imgSrc={genre7} />
                    <Genre name="Melody" imgSrc={genre8} />
                </div>
            </div>
            <div className="latest-english-section">
                <h2>Latest English</h2>
                <div className="latest-english-container">
                    <div className="latest-grid">
                        <LatestRelease title="Faded" date="Aug 11, 2017" imgSrc={latest1} Info="... 3:32" />
                        <LatestRelease title="Titanium" date="Aug 11, 2017" imgSrc={latest2} Info="... 4:05" />
                        <LatestRelease title="Closer" date="Aug 11, 2017" imgSrc={latest3} Info="... 4:40" />
                        <LatestRelease title="Sugar" date="Aug 11, 2017" imgSrc={latest4} Info="... 3:39" />
                        <LatestRelease title="Look What You Made Me Do" date="Aug 11, 2017" imgSrc={latest5} Info="... 3:31" />
                        <LatestRelease title="Lazer" date="Aug 11, 2017" imgSrc={latest6} Info="... 4:16" />
                        <LatestRelease title="good 4 u" date="Aug 11, 2017" imgSrc={latest7} Info="... 3:35" />
                        <LatestRelease title="Butter" date="Aug 11, 2017" imgSrc={latest8} Info="... 2:05" />
                        <LatestRelease title="Levitating" date="Aug 11, 2017" imgSrc={latest9} Info="... 3:40" />
                        <LatestRelease title="Save Your Tears" date="Aug 11, 2017" imgSrc={latest10} Info="... 7:39" />
                        <LatestRelease title="Look What You Made Me Do" date="Aug 11, 2017" imgSrc={latest5} Info="... 3:31" />
                    </div>
                </div>
            </div>
            <div className="latest-hindi-section">
                <h2>Latest Hindi</h2>
                <div className="latest-hindi-container">
                    <div className="latest-grid">
                        <LatestRelease title="Deva Deva" date="Aug 11, 2017" imgSrc={latest11} Info="... 3:32" />
                        <LatestRelease title="Subah Sham" date="Aug 11, 2017" imgSrc={latest12} Info="... 4:05" />
                        <LatestRelease title="Naadaniyan" date="Aug 11, 2017" imgSrc={latest13} Info="... 4:40" />
                        <LatestRelease title="Naina" date="Aug 11, 2017" imgSrc={latest14} Info="... 3:39" />
                        <LatestRelease title="Nazaare" date="Aug 11, 2017" imgSrc={latest15} Info="... 3:31" />
                        <LatestRelease title="Sarphira" date="Aug 11, 2017" imgSrc={latest16} Info="... 4:16" />
                        <LatestRelease title="Jamoore" date="Aug 11, 2017" imgSrc={latest17} Info="... 3:35" />
                        <LatestRelease title="Morni" date="Aug 11, 2017" imgSrc={latest18} Info="... 2:05" />
                        <LatestRelease title="Tu hai toh" date="Aug 11, 2017" imgSrc={latest19} Info="... 3:40" />
                        <LatestRelease title="Jadoo" date="Aug 11, 2017" imgSrc={latest20} Info="... 7:39" />
                        <LatestRelease title="Naadaniyan" date="Aug 11, 2017" imgSrc={latest13} Info="... 4:40" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainContent;

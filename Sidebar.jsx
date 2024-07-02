import React from 'react';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <input type="text" placeholder="Search..." className="search-bar" />
            <ul>
                <li>Latin Party Anthems</li>
                <li>Mood Booster</li>
                <li>EDM</li>
            </ul>
        </aside>
    );
};

export default Sidebar;

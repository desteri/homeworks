import React from 'react';
import './app-header.css';

const AppHeader = () => {
    return (
        <div className="app-header d-flex justify-content-between align-items-center mb-3">
            <h1>Sanno Kyuzon</h1>
            <h2>3 записи, из них 0 понравилось</h2>
        </div>
    );
}

export default AppHeader;
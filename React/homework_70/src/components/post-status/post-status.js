import React from 'react';
import './post-status.css';

const PostStatusFilter = () => {
    return (
        <div className="btn-group">
            <button className="btn-all btn btn-primary" value="Btn1">Все</button>
            <button className="btn-like btn btn-outline-secondary" value="Btn2">Понравившиеся</button>
        </div>
    );
}

export default PostStatusFilter;
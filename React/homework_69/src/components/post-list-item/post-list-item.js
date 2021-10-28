import React from 'react';

const PostListItem = () => {
    return (
        <li className="app-list-item d-flex justify-content-between">
            <span className="app-list-item-label">Статья 1</span>
            <div className="d-flex justify-content-center align-items-center">
                <button className="btn-star btn-sm">
                    <i className="fa fa-star"></i>
                </button>
                <button className="btn-trash btn-sm">
                    <i className="fa fa-trash-o"></i>
                </button>
            </div>
        </li>
    );
}

export default PostListItem;
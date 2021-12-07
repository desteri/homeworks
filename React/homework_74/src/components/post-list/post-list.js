import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.scss';

const PostList = ({posts, onDelete, onToggleImportant, onToggleLike}) => {

    const elem = posts.map((item) => {

        const {id, ...itemProps} = item;

        return (
            <li key={id}>
                <PostListItem 
                    {...itemProps} 
                    onDelete = {() => onDelete(id)}
                    onToggleImportant = {() => onToggleImportant(id)}
                    onToggleLike = {() => onToggleLike(id)}                    
                    />
            </li>
        );

    });

    return (
        <ul className="app-list list-group mt-5">
            {elem}
        </ul>
    );
}

export default PostList;
import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.css';

const PostList = ({posts}) => {

    const elem = posts.map((item) => {

        const {id, ...itemProps} = item;

        return (
            <li key={id}>
                <PostListItem {...itemProps} />
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
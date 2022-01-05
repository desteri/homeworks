import React from 'react';

import './app-header.css';
import styled from 'styled-components'

const HeadingOne = styled.h1`
    font-size: 26px;
`;

const HeadingTwo = styled.h2`
    font-size: 14px;
    color: #706d83;
`;

const AppHeader = ({allPosts, likes}) => {
    return (
        <div className="app-header d-flex justify-content-between align-items-center mb-3">
            <HeadingOne>Sanno Kyuzon</HeadingOne>
            <HeadingTwo>{allPosts} записи, из них {likes} понравилось</HeadingTwo>
        </div>
    );
}

export default AppHeader;
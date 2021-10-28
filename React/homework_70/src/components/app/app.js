import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import './app.css';

const App = () => {

    const data = [
        {label: "Статья номер 1", important: true, id: "j323j5"},
        {label: "Статья номер 2", important: false, id: "kjkj5"},
        {label: "Статья номер 3", important: false, id: "8412fkj"},
        {label: "Статья номер 4", important: false, id: "kh3lh3"},
        {label: "Статья номер 5", important: false, id: "hk2j3"},
        {label: "Статья номер 6", important: false, id: "l5l346"}
    ];

    return (
        <div>
            <AppHeader />
            <div className="search-panel d-flex justify-content-between">
                <SearchPanel />
                <PostStatusFilter />
            </div>
            <PostList posts={data} />
            <PostAddForm />
        </div>
    );
}

export default App;
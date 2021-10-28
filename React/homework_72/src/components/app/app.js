import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import './app.css';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: "Статья номер 1", important: true, id: "j323j5"},
                {label: "Статья номер 2", important: false, id: "kjkj5"},
                {label: "Статья номер 3", important: false, id: "8412fkj"},
                {label: "Статья номер 4", important: false, id: "kh3lh3"},
                {label: "Статья номер 5", important: false, id: "hk2j3"},
                {label: "Статья номер 6", important: false, id: "l5l346"}
            ]
        }
    };

    onDelete = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const before = data.slice(0, index);
            const after = data.slice(index + 1);
            const newData = [...before, ...after];

            return {
                data: newData
            }
        });
    }

    render() {
        return (
            <div>
                <AppHeader />
                <div className="search-panel d-flex justify-content-between">
                    <SearchPanel />
                    <PostStatusFilter />
                </div>
                <PostList 
                    posts={this.state.data} 
                    onDelete={this.onDelete}
                    />
                <PostAddForm />
            </div>
        );
    };
}

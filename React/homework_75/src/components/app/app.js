import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import ModalWindow from '../modal-window';
import FetchData from '../../fetch-data';
import Loading from '../loading';
import ErrorMessage from '../errorMessage';
import './app.css';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            searchValue: "",
            filter: "all",
            modalVisible: false,
            modal: [],
            loading: true,
            error: false
        }

        this.getAllData();

        this.id = 4;
    }

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

    addItem = (text) => {
        const newItem = {
            first_name: text,
            important: false,
            id: this.id++
        };

        this.setState(({data}) => {
            const newArr = [...data, newItem];

            return {
                data: newArr
            }
        });
    }

    onToggleImportant = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const before = data[index];
            const newImportant = {...before, important: !before.important};
            const newData = [...data.slice(0, index), newImportant, ...data.slice(index + 1)];

            return {
                data: newData
            }
        });
    }

    onToggleLike = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const before = data[index];
            const newLike = {...before, like: !before.like};
            const newData = [...data.slice(0, index), newLike, ...data.slice(index + 1)];

            return {
                data: newData
            }
        });
    }

    searchPost = (items, searchValue) => {
        if (searchValue.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.first_name.indexOf(searchValue) > -1;
        });
    }

    onUpdateSearchPanel = (value) => {
        this.setState({
            searchValue: value
        });
    }

    filterPost = (items, filter) => {
        if (filter === "like") {
            return items.filter(item => item.like);
        } else {
            return items;
        }
    }

    onUpdateFilter = (value) => {
        this.setState({
            filter: value
        });
    }

    //Fetch-Data
    getData = new FetchData();

    modalData = (data) => {
        this.setState({
            modal: data.data
        });
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        });
    }

    onOpenWindow = (id) => {
        this.setState({
            modalVisible: !this.state.modalVisible
        });

        this.getData.getPostById(id)
        .then(singleData => {
            this.modalData(singleData);
        })
        .catch(this.onError);
    }

    onCloseWindow = () => {
        this.setState({
            modalVisible: !this.state.modalVisible,
            modal: []
        });
    }

    getAllData() {
        this.getData.getAllPost()
        .then(allData => {
            this.setState({
                data: allData.data,
                loading: false
            })
        })
        .catch(this.onError);
    }

    render() {

        const {data, searchValue, filter, modalVisible, modal, loading, error} = this.state;
        const likes = data.filter(item => item.like).length;
        const searchPost = this.filterPost(this.searchPost(data, searchValue), filter);
        const allItems = searchPost.length;
        const errMsg =  error ? <ErrorMessage /> : null;
        const spin =  loading ? <Loading /> : null;
        const content = !(error || loading) ? <PostList 
                                    posts={searchPost} 
                                    onDelete={this.onDelete}
                                    onToggleImportant={this.onToggleImportant}
                                    onToggleLike={this.onToggleLike}
                                    onOpenWindow={this.onOpenWindow}
                                    /> 
                                    : null;

        return (
            <div>
                <AppHeader 
                    allPosts={allItems}
                    likes={likes}
                />
                <div className="search-panel d-flex justify-content-between">
                    <SearchPanel 
                        onUpdateSearchPanel={this.onUpdateSearchPanel}
                    />
                    <PostStatusFilter 
                        filter={filter}
                        onUpdateFilter={this.onUpdateFilter}
                    />
                </div>
                {errMsg}
                {spin}
                {content}
                
                <PostAddForm
                    addItem={this.addItem}
                />
                <ModalWindow
                    modalVisible={modalVisible}
                    onCloseWindow={this.onCloseWindow}
                    modalContent={modal}
                />
            </div>
        );
    };
}
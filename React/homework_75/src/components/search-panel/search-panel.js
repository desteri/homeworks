import React from 'react';

export default class SearchPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    onSearchPost = (e) => {
        const value = e.target.value;

        this.setState({
            text: value
        });

        this.props.onUpdateSearchPanel(value);
    }

    render() {
        return (
            <input 
                type="text"    
                className="form-control search-input"
                placeholder="Поиск записей"
                onChange={this.onSearchPost}
            />
        );
    }
}
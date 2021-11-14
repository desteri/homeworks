import React from 'react';
import './post-add-form.css';

export default class PostAddForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    onChangeValue = (e) => {
        this.setState({
            text: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();

        this.props.addItem(this.state.text);

        this.setState({
            text: ''
        });
    }

    render() {
        return (
            <form 
                className="bottm-panel d-flex mt-3"
                onSubmit={this.onSubmit}
                >
                <input 
                    type="text"
                    placeholder="Введите мысль..."
                    className="form-control new-post-label"
                    onChange={this.onChangeValue}
                    value={this.state.text}
                />
    
                <button
                    type="submit"
                    className="btn btn-outline-secondary ms-1"
                    >
                    Добавить
                </button>
            </form>
        );
    }
    
    
}
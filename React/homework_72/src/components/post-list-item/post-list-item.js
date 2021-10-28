import React from 'react';
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './post-list-item.css';

export default class PostListItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            important: false,
            like: false
        };

    }

    addImportant = () => {
        this.setState(({important}) => ({
            important: !important
        }));
    }

    addLike = () => {
        this.setState(({like}) => ({
            like: !like
        }));
    }

    render() {

        const {label, onDelete} = this.props;
        const {important, like} = this.state;

        let className = "app-list-item d-flex justify-content-between align-items-center mb-1";

        if (important) {
            className += " important";
        }

        if (like) {
            className += " like";
        }

        return (
            <div className={className}>
                <span className="app-list-item-label" onClick={this.addLike}>{label}{important}</span>
                <div className="d-flex justify-content-center align-items-center">
                    <button className="btn-star btn btn-link" onClick={this.addImportant}>
                        <FontAwesomeIcon icon={faStar} />
                    </button>
                    <button className="btn-trash btn btn-link text-danger me-2" onClick={onDelete}>
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                    <FontAwesomeIcon icon={faHeart} className="heart me-2" />
                </div>
            </div>
        );

    }

}
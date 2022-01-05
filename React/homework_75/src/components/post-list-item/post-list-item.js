import React from 'react';
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faStar, faHeart, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './post-list-item.css';

export default class PostListItem extends React.Component {

    render() {
        const {avatar, first_name, last_name, onOpenWindow, onDelete, onToggleImportant, onToggleLike, important, like} = this.props;

        let classNames = "app-list-item d-flex justify-content-between align-items-center mb-1";

        if (important) {
            classNames += " important";
        }

        if (like) {
            classNames += " like";
        }

        return (
            <div className={classNames}>
                <img src={avatar} alt='img' width='50' height='50'></img>
                <span className="app-list-item-label" onClick={onToggleLike}>
                    {first_name} {last_name}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button className="btn-star btn btn-link" onClick={onToggleImportant}>
                        <FontAwesomeIcon icon={faStar} />
                    </button>
                    <button className="btn-trash btn btn-link text-danger me-2" onClick={onDelete}>
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                    <button className="btn-modal btn btn-link me-2" onClick={onOpenWindow}>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                    <FontAwesomeIcon icon={faHeart} className="heart me-2" />
                </div>
            </div>
        );
    }
}
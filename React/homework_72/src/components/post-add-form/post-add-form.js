import React from 'react';
import './post-add-form.css';

const PostAddForm = () => {
    return (
        <form className="bottm-panel d-flex mt-3">
            <input 
                type="text"
                placeholder="Введите мысль..."
                className="form-control new-post-label"
            />
            <button
                type="submit"
                className="btn btn-outline-secondary ms-1">
                Добавить
            </button>
        </form>
    );
}

export default PostAddForm;
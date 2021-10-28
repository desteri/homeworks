import React from 'react';

const PostAddForm = () => {
    return (
        <form className="bottm-panel d-flex">
            <input 
                type="text"
                placeholder="Введите мысль..."
                className="form-control new-post-label"
            />
            <button
                type="submit"
                className="btn btn-outline-secondary">
                Добавить
            </button>
        </form>
    );
}

export default PostAddForm;
import React from 'react';
import './post-status.css';

export default class PostStatusFilter extends React.Component {
    constructor(props) {
        super(props);
        this.button = [
            {
                name: "all",
                label: "Все"
            },
            {
                name: "like",
                label: "Понравившиеся"
            }
        ];
    }

    render() {

        const btns = this.button.map(({name, label}) => {
            const {filter, onUpdateFilter} = this.props;
            const active = filter === name;
            const activeClass = active ? 'btn-all btn-primary' : 'btn-like btn-outline-secondary';

            return (
                <button key={name} className={`btn ${activeClass}`} onClick={() => onUpdateFilter(name)}>{label}</button>
            )
        });

        return (
            <div className="btn-group">
                {btns}
            </div>
        );
    }
}
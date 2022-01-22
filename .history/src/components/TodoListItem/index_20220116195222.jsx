import React from 'react';

import './TodoListItem.css';

class TofoListItem extends React.Component {
    
    render() {
        const {label, important = false} = this.props;
        
        retrun (
            <span className="todo-list-item">
            <span
                className="todo-list-item-label"
                style={style}
            >
                {label}
            </span>

            <button
                type="button"
                className="btn btn-outline-success btn-sm float-right"
            >
                <i className="fa fa-exclamation" />
            </button>

            <button
                type="button"
                className="btn btn-outline-danger btn-sm float-right"
            >
                <i className="fa fa-trash-o" />
            </button>
        </span>
        );
    }
}

export const TodoListItemFunc = ({label, important = false}) => {

    const style = {
        color: important ? 'steelblue' : 'black',
        fontWeight: important ? 'bold' : 'normal'
    };

    return (
        <span className="todo-list-item">
            <span
                className="todo-list-item-label"
                style={style}
            >
                {label}
            </span>

            <button
                type="button"
                className="btn btn-outline-success btn-sm float-right"
            >
                <i className="fa fa-exclamation" />
            </button>

            <button
                type="button"
                className="btn btn-outline-danger btn-sm float-right"
            >
                <i className="fa fa-trash-o" />
            </button>
        </span>
    );
};

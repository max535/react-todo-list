import React from 'react';

import './ItemAddForm.css';

export const ItemAddForm = ({onItemAdded}) => {
    return (
        <form className="item-add-form">
            <input 
                type="text"
                className="form-control"
                onChange={this.onLabelChange}
                placeholder="What needs to be done"
            />
            <button 
                className="btn btn-outline-secondary"
                onClick={() => onItemAdded('Hello World!')}
            >
                Add Item
            </button>
        </form>
    );
};

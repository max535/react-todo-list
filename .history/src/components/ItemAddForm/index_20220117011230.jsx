import React from 'react';

import './ItemAddForm.css';

export class ItemAddForm extends React.Component {
    render() {
        return (
            <form className="item-add-form d-flex">
                <input 
                    type="text"
                    className="form-control"
                    onChange={this.onLabelChange}
                    placeholder="What needs to be done"
                />
                <button 
                    className="btn btn-outline-secondary"
                    onClick={() => this.props.onItemAdded('Hello World!')}
                >
                    Add Item
                </button>
            </form>
        );
    }
};

import React from 'react';

import './ItemAddForm.css';

export class ItemAddForm extends React.Component {
    state = {
        label: '',
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value,
        });
        
    };

    onSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <form 
                className="item-add-form d-flex"
                onSubmit={this.onSubmit}
            >
                <input 
                    type="text"
                    className="form-control"
                    onChange={this.onLabelChange}
                    placeholder="What needs to be done"
                />
                <button 
                    className="btn btn-outline-secondary"
                    onClick={() => this.props.onItemAdded()}
                >
                    Add Item
                </button>
            </form>
        );
    }
};

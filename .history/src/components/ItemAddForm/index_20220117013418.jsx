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

    handleSumbit = (e) => {
        e.preventDefault();
    }

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
                    onClick={() => this.props.onItemAdded(this.state.label)}
                >
                    Add Item
                </button>
            </form>
        );
    }
};

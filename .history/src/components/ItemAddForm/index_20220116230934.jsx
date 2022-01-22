import React from 'react';

import './ItemAddForm.css';

export const ItemAddForm = ({onItemAdded}) => {
    return (
        <div className="item-add-form">
            <button 
                className="btn btn-outline-secondary"
                onClick={onItemAdded}
            >Add Item</button>
        </div>
    );
};

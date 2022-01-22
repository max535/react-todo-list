import React from 'react';

import './ItemStatusFilter.css';

export class ItemStatusFilter extends React.Component {
    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'},
    ];

    render() {
        const buttons = this.buttons.map(({name, label}) => {
            return (
                <button 
                    type="button"
                    className="btn btn-info"
                    key={name}
                >
                {label}
                </button>
            );
        });

        return (
            <div className="btn-group">
                {buttons}
            </div>
        );
    }
};

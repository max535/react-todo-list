import React from 'react';

import './SearchPanel.css';

export class SearchPanel extends React.Component {
    render() {
        return (
            <input 
                type="text"
                className="form-control search-input"
                placeholder="type to search"
            />
        );
    }
}

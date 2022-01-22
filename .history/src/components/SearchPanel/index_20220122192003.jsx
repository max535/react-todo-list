import { render } from '@testing-library/react';
import React from 'react';

import './SearchPanel.css';

export class SearchPanel = () => {
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

export const SearchPanel = () => {
    return (
        <input 
            type="text"
            className="form-control search-input"
            placeholder="type to search"
        />
    );
}

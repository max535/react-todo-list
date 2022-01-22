import React from 'react';

import './SearchPanel.css';

export class SearchPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
        };
        this.onSearchChange = this.onSearchChange.bind(this);
    }



    onSearchChange(event) {
        this.setState({
            term: event.target.value
        });
    }

    render() {
        return (
            <input 
                type="text"
                className="form-control search-input"
                placeholder="type to search"
                value={this.state.term}
                onChange={this.onSearchChange}
            />
        );
    }
}

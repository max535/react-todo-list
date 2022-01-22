import React from 'react';
import ReactDOM from 'react-dom';

const ToddList = () => {
    return (
        <ul>
            <li>Learn React</li>
            <li>Build Awesome App</li>
        </ul>
    );
}

const AppHeader = () => {
    return (
        <h1>My Todo List</h1>
    );
}

const el = (
    <div>
        <AppHeader />
        <input placeholder="search" />
        <ToddList />
    </div>
);

ReactDOM.render(
    el,
    document.getElementById('root')
);

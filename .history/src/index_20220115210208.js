import React from 'react';
import ReactDOM from 'react-dom';

const ToddList = () => {
    const items = ['Drink Coffee', 'Build Awesome App'];

    return (
        <ul>
            <li>{items[0]}</li>
            <li>{items[1]}</li>
        </ul>
    );
}

const AppHeader = () => {
    return <h1>My Todo List</h1>;
}

const SearchPanel = () => {
    return <input placeholder="search" />;
}

const App = () => {
    return (
        <div>
            <AppHeader />
            <SearchPanel />
        <   ToddList />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

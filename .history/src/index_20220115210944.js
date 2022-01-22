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
    const searchText = 'Type here to search'
    return <input placeholder={searchText} />;
}

const App = () => {
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <ToddList items={['Item 1', 'Item 2']} />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

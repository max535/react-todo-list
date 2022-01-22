import React from 'react';
import ReactDOM from 'react-dom';
import { TodoApp } from './components/TodoApp';

const AppHeader = () => {
    return <h1>My Todo List</h1>;
}

const SearchPanel = () => {
    const searchText = 'Type here to search';
    const searchStyle = {
        fontSize: '20px'
    }

    return <input 
        style={searchStyle} 
        placeholder={searchText} />;
}

const App = () => {
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoApp />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

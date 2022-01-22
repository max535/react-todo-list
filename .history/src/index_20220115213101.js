import React from 'react';
import ReactDOM from 'react-dom';
import { AppHeader } from './components/AppHeader';
import { TodoApp } from './components/TodoApp';

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

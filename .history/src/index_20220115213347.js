import React from 'react';
import ReactDOM from 'react-dom';
import { AppHeader } from './components/AppHeader';
import { SearchPanel } from './components/SearchPanel';
import { TodoApp } from './components/TodoApp';

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

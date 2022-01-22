import React from 'react';
import ReactDOM from 'react-dom';

import { AppHeader } from './components/AppHeader';
import { SearchPanel } from './components/SearchPanel';
import { TodoApp, TodoList } from './components/TodoList';

const App = () => {
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

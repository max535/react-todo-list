import React from 'react';
import ReactDOM from 'react-dom';

import { AppHeader } from './components/AppHeader';
import { SearchPanel } from './components/SearchPanel';
import { TodoList } from './components/TodoList';
import { ItemStatusFilter } from './components/ItemStatusFilter.jsx';

import './index.css';

const App = () => {

    const todoData = [
        {label: 'Drink Coffee', important: false, id: 1},
        {label: 'Build Awesome App', important: true, id: 2},
        {label: 'Have a lunch', impportant: false, id: 3},
    ];

    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3} />
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>
            <TodoList todos={todoData} />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

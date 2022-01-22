import React from 'react';

import { AppHeader } from '../AppHeader';
import { SearchPanel } from '../SearchPanel';
import { TodoList } from '../TodoList';
import { ItemStatusFilter } from '../ItemStatusFilter/index.jsx';

import './App.css';

export default class App extends React.Component {
    state = {
        todoData: [
            {label: 'Drink Coffee', important: false, id: 1},
            {label: 'Build Awesome App', important: true, id: 2},
            {label: 'Have a lunch', impportant: false, id: 3},
        ],
    };
}

export const App = () => {

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
            <TodoList 
                todos={todoData} 
                onDeleted={(id) => console.log('Del', id)}
            />
        </div>
    );
};

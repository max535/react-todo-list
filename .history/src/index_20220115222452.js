import React from 'react';
import ReactDOM from 'react-dom';

import { AppHeader } from './components/AppHeader';
import { SearchPanel } from './components/SearchPanel';
import { TodoList } from './components/TodoList';

const App = () => {
    const toData = [
        {label: 'Drink Coffee', important: false},
        {label: 'Build Awesome App', important: true},
        {label: 'Have a lunch', impportant: false},
    ];

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

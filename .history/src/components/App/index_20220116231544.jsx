import React from 'react';

import { AppHeader } from '../AppHeader';
import { SearchPanel } from '../SearchPanel';
import { TodoList } from '../TodoList';
import { ItemStatusFilter } from '../ItemStatusFilter/index.jsx';

import './App.css';
import { ItemAddForm } from '../ItemAddForm';

export class App extends React.Component {
    maxId = 100;

    state = {
        todoData: [
            {label: 'Drink Coffee', important: false, id: 1},
            {label: 'Build Awesome App', important: true, id: 2},
            {label: 'Have a lunch', impportant: false, id: 3},
        ],
    };

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            
            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1),
            ];

            return {
                todoData: newArray,
            };
        });
    };

    addItem = (text) => {
        const newItem = {
            label: text,
            important: false,
            id: this.maxId++
        };

        this.setState(({todoData}) => {
            const newArr = [
                ...todoData,
                newItem
            ];

            return {
                todoData: newArr
            };
        });
    };

    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>

                <TodoList 
                    todos={this.state.todoData} 
                    onDeleted={this.deleteItem}
                />

                <ItemAddForm onItemAdded={this.addItem} />
            </div>
        );
    }
}

// export const App = () => {

//     const todoData = [
//         {label: 'Drink Coffee', important: false, id: 1},
//         {label: 'Build Awesome App', important: true, id: 2},
//         {label: 'Have a lunch', impportant: false, id: 3},
//     ];

//     return (
//         <div className="todo-app">
//             <AppHeader toDo={1} done={3} />
//             <div className="top-panel d-flex">
//                 <SearchPanel />
//                 <ItemStatusFilter />
//             </div>
//             <TodoList 
//                 todos={todoData} 
//                 onDeleted={(id) => console.log('Del', id)}
//             />
//         </div>
//     );
// };

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
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch'),
        ],
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++,
        }
    }

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
        const newItem = this.createTodoItem(text);

        this.setState(({todoData}) => {
            const newArr = [
                ...todoData,
                newItem,
            ];

            return {
                todoData: newArr,
            };
        });
    };

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);

            const oldItem = todoData[idx];
            const newItem = {...oldItem, done: !oldItem.done};

            const newArray = [
                ...todoData.slice(0, idx),
                newItem,
                ...todoData.slice(idx + 1),
            ];

            return {
                todoData: newArray,
            };
        });
    };

    onToggleImportant = (id) => {
        console.log('Toggle Important', id);
    };

    render() {
        const {todoData} = this.state;
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;

        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>

                <TodoList 
                    todos={todoData} 
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
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

import React from 'react';

import { TodoListItem } from './TodoListItem';

export const TodoList = (props) => {
    return (
        <ul>
            <li>
                <TodoListItem 
                    label="Drink Coffee" 
                />
            </li>
            <li>
                <TodoListItem 
                    label="Build React App"
                    important 
                />
                </li>
        </ul>
    );
};

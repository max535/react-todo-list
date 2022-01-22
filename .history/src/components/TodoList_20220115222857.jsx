import React from 'react';

import { TodoListItem } from './TodoListItem';

export const TodoList = ({todos}) => {
    return (
        <ul>
            <li>
                <TodoListItem 
                    label={todos[0].label}
                />
            </li>
            <li>
                <TodoListItem 
                    label={todos[1].label}
                />
                </li>
        </ul>
    );
};

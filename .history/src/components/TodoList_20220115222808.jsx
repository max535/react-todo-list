import React from 'react';

import { TodoListItem } from './TodoListItem';

export const TodoList = ({todos}) => {
    return (
        <ul>
            <li>
                <TodoListItem 
                    label={todos}
                />
            </li>
            <li>
                <TodoListItem 
                    
                />
                </li>
        </ul>
    );
};

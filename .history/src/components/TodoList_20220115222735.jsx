import React from 'react';

import { TodoListItem } from './TodoListItem';

export const TodoList = (props) => {
    return (
        <ul>
            <li>
                <TodoListItem 
                    label={props.todoData}
                />
            </li>
            <li>
                <TodoListItem 
                    
                />
                </li>
        </ul>
    );
};

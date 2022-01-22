import React from 'react';

import { TodoListItem } from './TodoListItem';

export const TodoList = ({todos}) => {
    const elements = todos.map((item, index) => {
        return (
            <li key={index}>
                <TodoListItem {...item} />
            </li>
        );
    });

    return (
        <ul>
            {elements}
        </ul>
    );
};

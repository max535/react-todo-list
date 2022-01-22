import React from 'react';

import { TodoListItem } from './TodoListItem';

export const TodoList = ({todos}) => {

    const elements = todos.map((item) => {
        console.log(item.id);
        return (
            <li key={item.id}>
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

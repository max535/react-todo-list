import React from 'react';

import { TodoListItem } from './TodoListItem';

export const TodoList = ({todos}) => {

    const elements = todos.map((item) => {

        const {id} = item;

        return (
            <li key={id}>
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

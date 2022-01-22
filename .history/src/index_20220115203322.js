import React from 'react';
import ReactDOM from 'react-dom';

const ToddList = () => {
    return (
        <ul>
            <li>Learn React</li>
            <li>Build Awesome App</li>
        </ul>
    );
}

ReactDOM.render(
    <TodoList />,
    document.getElementById('root')
);

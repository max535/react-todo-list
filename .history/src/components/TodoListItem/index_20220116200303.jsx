import React from 'react';

import './TodoListItem.css';

export class TodoListItem extends React.Component {
    
    render() {
        const {label, important = false} = this.props;

        const style = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        };

        return (
            <span className="todo-list-item">
            <span
                className="todo-list-item-label"
                style={style}
                onClick={this.handleClick}
            >
                {label}
            </span>

            <button
                type="button"
                className="btn btn-outline-success btn-sm float-right"
            >
                <i className="fa fa-exclamation" />
            </button>

            <button
                type="button"
                className="btn btn-outline-danger btn-sm float-right"
            >
                <i className="fa fa-trash-o" />
            </button>
        </span>
        );
    }
}

// export const TodoListItem = ({label, important = false}) => {

//     const style = {
//         color: important ? 'steelblue' : 'black',
//         fontWeight: important ? 'bold' : 'normal'
//     };

//     return (
//         <span className="todo-list-item">
//             <span
//                 className="todo-list-item-label"
//                 style={style}
//             >
//                 {label}
//             </span>

//             <button
//                 type="button"
//                 className="btn btn-outline-success btn-sm float-right"
//             >
//                 <i className="fa fa-exclamation" />
//             </button>

//             <button
//                 type="button"
//                 className="btn btn-outline-danger btn-sm float-right"
//             >
//                 <i className="fa fa-trash-o" />
//             </button>
//         </span>
//     );
// };

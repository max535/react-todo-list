import React from 'react';

import './TodoListItem.css';

export class TodoListItem extends React.Component {
    state = {
        done: false,
        important: false,
    };
    
    onLabelClick = () => {
        this.setState(prevState => ({
            done: prevState
          }));
    };

    onMarkImportant = () => {
        this.setState({
            important: true,
        })
    }

    render() {
        const {label} = this.props;
        const {done, important} = this.state;

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }

        if (important) {
            classNames += ' important';
        }

        return (
            <span className={classNames}>
                <span
                    className="todo-list-item-label"
                    onClick={this.onLabelClick}
                >
                    {label}
                </span>

                <button
                    type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    onClick={this.onMarkImportant}
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

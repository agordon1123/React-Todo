import React from 'react';
import './Todo.css';

{/* * 11 * Created ToDo component and passed in props */}
const ToDo = props => {
    return (
        <div className='todo-border' onClick={() => props.toggleItem(props.item.id)}>
            {/* * 12 * Rendering task by name using props.item.task and using a ternary to see if the value of props.item.completed is true. If true, this adds the className of 'completed', else className is set to the item */}
            <p className={`item${props.item.completed ? ' completed' : ''}`}>{props.item.task}</p>
        </div>
    )
}

export default ToDo;
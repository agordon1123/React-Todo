import React from 'react';
import './Todo.css';

const ToDo = props => {
    console.log(props.item.id)
    return (
        <div onClick={() => props.toggleItem(props.item.id)}>
            <p className={`item${props.item.completed ? ' completed' : ''}`}>{props.item.task}</p>
        </div>
    )
}

export default ToDo;
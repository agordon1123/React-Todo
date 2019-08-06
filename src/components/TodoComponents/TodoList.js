import React from 'react';
import ToDo from './Todo';

// * 10 * Created todo list component to take in props and create list items
const ToDoList = props => {
    return(
        <div>
            {/* * 15 * Mapped over each item passed as props and return one item for each item held on state (initialized in App) */}
            {props.items.map(i => (
                <ToDo 
                    key={i.id}
                    item={i}
                    toggleItem={props.toggleItem}
                />
            ))}
            <button onClick={props.clearItems}>Clear</button>
        </div>
    )
}

export default ToDoList;

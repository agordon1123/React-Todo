import React from 'react';
import ToDo from './Todo';

const ToDoList = props => {
    console.log(props);
    return(
        <div>
            {props.items.map(i => (
                <ToDo 
                    key={i.id}
                    item={i}
                    toggleItem={props.toggleItem}
                />
            ))}
            <button onClick={props.clearItems}>Clear Completed</button>
        </div>
    )
}

export default ToDoList;

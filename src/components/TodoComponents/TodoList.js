import React from 'react';
import ToDo from './Todo';

const ToDoList = props => {
    console.log(props);
    return(
        <div>
            <p>ToDoList:</p>
            {props.items.map(i => (
                <ToDo 
                    key={i.id}
                    item={i}
                    toggleItem={props.toggleItem}
                />
            ))}
        </div>
    )
}

export default ToDoList;

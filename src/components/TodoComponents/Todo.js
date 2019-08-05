import React from 'react';

const ToDo = props => {
    console.log(props.item.id)
    return (
        <div onClick={() => props.toggleItem(props.item.id)}>
            <p>{props.item.task}</p>
        </div>
    )
}

export default ToDo;
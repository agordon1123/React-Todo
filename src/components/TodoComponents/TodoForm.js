import React from 'react';

class ToDoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            item: ''
        }
    }

    submitItem = e => {
        e.preventDefault();
        this.props.addItem(this.state.item);
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <form onSubmit={this.submitItem}>
                <input 
                    type='text'
                    value={this.item}
                    name='item'
                    onChange={this.handleChanges}
                    placeHolder='What next?'
                />
                <button>Add Todo</button>
                <button>Clear Completed</button>
            </form>
        )
    }
}

export default ToDoForm;
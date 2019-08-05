import React from 'react';

// * 1 * Create form that will take user input and render to a list
class ToDoForm extends React.Component {
    // * 2 * Created my constructor and initialized this.state to an object with a key for each item
    constructor() {
        super();
        this.state = {
            item: ''
        }
    }

    // * 9 * Created onSubmit handler to add newItem value to this.state
    submitItem = e => {
        e.preventDefault();
        this.props.addItem(this.state.item);
    }

    // * 3 * Created my changeHandler to setState to e(input).target.value
    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            // * 4 * Created my form, input, and button
            <form className='form' onSubmit={this.submitItem}>
                <input 
                    type='text'
                    value={this.item}
                    name='item'
                    onChange={this.handleChanges}
                    placeholder='What next?'
                />
                <button>Add Todo</button>
            </form>
        )
    }
}

export default ToDoForm;
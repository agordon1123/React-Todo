import React from 'react';
import ToDoForm from './components/TodoComponents/TodoForm';
import ToDoList from './components/TodoComponents/TodoList';

import './styles.css';

const todoData = [
  {
    task: 'Finish building my component',
    id: 1,
    completed: false
  },
  {
    task: 'Hit stretch goals',
    id: 2,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      items: todoData
    }
    console.log(this.state)
  }

  toggleItem = id => {
    this.setState({
      items: this.state.items.map(i => {
        if(i.id === id) {
          return {
            ...i,
            completed: !i.completed
          };
        }
        else {
          return i;
        }
      })
    })
  }

  addItem = itemName => {
    const newItem = {
      task: itemName,
      id: Date.now(),
      completed: false
    }
    this.setState({
      items: [...this.state.items, newItem]
    })
  }

  render() {
    return (
      <div>
        <h2>Functional To Do List</h2>
        <p>Stay motivated and focused with this interactive to-do list built using React classes</p>
        <ToDoList 
          items={this.state.items} 
          toggleItem={this.toggleItem} 
        />
        <ToDoForm addItem={this.addItem} />
      </div>
    );
  }
}

export default App;

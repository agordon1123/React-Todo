import React from 'react';
import ToDoForm from './components/TodoComponents/TodoForm';
import ToDoList from './components/TodoComponents/TodoList';

import './styles.css';

const todoData = [
  {
    task: 'Finish building my components',
    id: 1,
    completed: true
  },
  {
    task: 'Initialize state and props',
    id: 2,
    completed: true
  },
  {
    task: 'Wire up functions',
    id: 3,
    completed: true
  },
  {
    task: 'Minimum Viable Product',
    id: 4,
    completed: true
  },
  {
    task: 'Hit stretch goals',
    id: 5,
    completed: false
  }
];

// * 5 * Created my React.Component App
class App extends React.Component {
  // * 6 * Created my constructor and initialized state with mockData above
  constructor() {
    super();
    this.state = {
      items: todoData
    }
  }

  // * 13 * Created toggleItem to map through props and check if the item.id matches current state's id. If yes, it inverses the value of completed (which will work with our ternary in ToDo.js). If else, it returns the item.
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

  // * 7 * Created addItem fn to initialize newItem added from form input and set to State
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

  // * 16 * Created clearItems fn to filter out and remove any items within state where completed is true
  clearItems = () => {
    this.setState({
      items: this.state.items.filter(i => !i.completed)
    })
  }

  render() {
    return (
      <div className='app'>
        <h1>Goals</h1>
        <p>Stay motivated and focused with this interactive to-do list built using React classes:</p>
        {/* * 14 * Called ToDoList and passed state and the toggleItems fn */}
        <ToDoList 
          items={this.state.items} 
          toggleItem={this.toggleItem} 
          clearItems={this.clearItems} 
        />
        {/* * 8 * Called ToDoForm and pass addItem */}
        <ToDoForm addItem={this.addItem} />
      </div>
    );
  }
}

export default App;

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
    task: 'Impliment LocalStorage',
    id: 5,
    completed: true
  }
];

class App extends React.Component {
  constructor() {
    super();
    const parsed = JSON.parse(localStorage.getItem('items'))
    console.log(parsed)
    this.state = {
      items: parsed ? parsed : todoData
    }
    console.log(this.state)
  }

  componentDidMount() {
    if (localStorage.getItem('items')) {
      this.setState({items: JSON.parse(localStorage.getItem('items'))})
    } else {
      localStorage.setItem('items', JSON.stringify(todoData))
    }
  }

  componentDidUpdate() {
    localStorage.setItem('items', JSON.stringify(this.state.items))
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
    // this.setState({
    //   items: [...this.state.items, newItem]
    // })
    const stringified = JSON.stringify(newItem)
    console.log(stringified)
    localStorage.setItem('items', stringified)
  }

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
        <ToDoList 
          items={[this.state.items]} 
          toggleItem={this.toggleItem} 
          clearItems={this.clearItems} 
        />
        <ToDoForm addItem={this.addItem} />
      </div>
    );
  }
}

export default App;

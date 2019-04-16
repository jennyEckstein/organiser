import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './layout/Header';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Learn React',
        completed: true
      },
      {
        id: uuid.v4(),
        title: 'Read clean code',
        completed: false
      },
    ]
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(), title, completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  render() {
    return (
      <div className="App">
        <div class="container"> <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo} /></div>

      </div>
    );
  }
}

export default App;

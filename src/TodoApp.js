import React, { Component } from 'react';
import './TodoApp.css';
import TodoList from  './TodoList';

class TodoApp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          title: 'First Todo',
          complete: false
        }
      ],
      newTodo: {
        title: '',
        complete: false
      }
    };
  }

  addTodo() {
    if (this.state.newTodo.title === '') {
      return false;
    }

    const todos = this.state.todos.concat(this.state.newTodo);
    const newTodo = Object.assign({}, this.state.newTodo);

    newTodo.title = '';

    this.setState({
      todos,
      newTodo
    });
  }

  handleNewTodo = (e) => {
   let newTodo = Object.assign({}, this.state.newTodo);

   newTodo.title = e.target.value;

    this.setState({
      newTodo
    });
  }

  removeTodo = (todoIdx) => {
    const array = [...this.state.todos];

    array.splice(todoIdx, 1);

    this.setState({
      todos: array
    });

  }

  toggleTodo = (todoIdx) => {
    const todos = [...this.state.todos];

    todos[todoIdx].complete = !todos[todoIdx].complete;

    this.setState({
      todos
    });
  }

  render() {

    const completedTodos = this.state.todos.filter(todo => todo.complete).length;

    // TODO: convert the header to it's own functional stateless component

    return (
      <div className="todo-app">
        <div className="main-container">
          <header>
            <h3>My Todo List</h3>
            <small>{completedTodos} / {this.state.todos.length} todo(s) completed</small>
          </header>
          {this.state.todos.length === 0 &&
            <div className="placeholder">
              <p>No todos created.</p>
            </div>
          }
          <TodoList
            todos={this.state.todos}
            toggleTodo={this.toggleTodo}
            removeTodo={this.removeTodo} />
          <hr/>
          <div>
            <div>
              <h5>Add a Todo:</h5>
              <input
                type="text"
                className="add-todo-title control"
                value={this.state.newTodo.title}
                onChange={this.handleNewTodo}
                placeholder="Take out the trash" />
            </div>
            <button
              type="button" 
              className="btn-add"
              onClick={() => { this.addTodo(); }}>Add</button>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoApp;

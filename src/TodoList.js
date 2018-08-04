import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoList extends Component {
  render() {
    const { todos, toggleTodo, removeTodo } = this.props;

    return (
      <div className="todos">
        <ul>
          {
            todos.map((todo, idx) => {
              return (
                <li key={idx}>
                  <div>
                    <input
                      type="checkbox"
                      onChange={() => { toggleTodo(idx); }} /> <span className={ todo.complete ? 'done' : '' }>{ todo.title }</span>
                  </div>
                  <button
                    type="button"
                    className="btn-remove"
                    onClick={() => { removeTodo(idx); }}>Remove</button>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default TodoList;

TodoList.propTypes = {
  todos: PropTypes.array,
  toggleTodo: PropTypes.func,
  removeTodo: PropTypes.func
};

import React from "react";

import "./TodoApp.style.css";

import TodoItem from "./TodoItem.component";

class TodoApp extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      input: "",
    };
  }
  inputHandler = (event) => {
    this.setState({
      input: event.target.value,
    });
  };
  addTodo = () => {
    this.setState((state) => {
      return {
        ...state,
        todos: [...state.todos, this.state.input],
      };
    });
    this.setState({
      input: "",
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="add-todo">
          <input
            type="text"
            placeholder="New Task"
            onChange={this.inputHandler}
            value={this.state.input}
          />
          <button onClick={this.addTodo}>Add</button>
        </div>
        <div className="todo">
          {this.state.todos.map((todo, index) => {
            return <TodoItem key={index} todo={todo} />;
          })}
          
        </div>
      </React.Fragment>
    );
  }
}

export default TodoApp;

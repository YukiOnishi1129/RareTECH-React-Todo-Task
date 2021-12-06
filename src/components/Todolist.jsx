/**
 * TodoList
 * @package components
 */
import React from "react";

/**
 * TodoList
 * @param {*} props
 * @returns
 */
export const TodoList = (props) => {
  const handleRemoveTask = (index) => {
    const newTodos = (todos) =>
      [...todos].filter((todo, todoIndex) => todoIndex !== index);
    props.setTodos(newTodos);
  };

  const handleOnEdit = (index, value) => {
    const newTodos = props.todos.map((todo, todoIndex) => {
      if (todoIndex === index) {
        todo.task = value;
      }
      return todo;
    });
    props.setTodos(newTodos);
  };

  return (
    <div className="task-area">
      <ul className="todoList">
        {props.todos
          .filter((val) => {
            if (props.searchKeyword === "") {
              return val;
            } else if (
              val.task
                .toString()
                .toLowerCase()
                .includes(props.searchKeyword.toString().toLowerCase())
            ) {
              return val;
            }
            return false;
          })
          .map((todo, index) => (
            <li className="todo" key={index}>
              <input
                type="text"
                className="editForm"
                value={todo.task}
                onChange={(event) => handleOnEdit(index, event.target.value)}
              />
              <span onClick={() => handleRemoveTask(index)}>
                <i className="far fa-trash-alt"></i>
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
};
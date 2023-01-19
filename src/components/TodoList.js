import React, { useState ,createContext} from "react";
import List from "../common/List";
import TodoItem from "./TodoItem";
export const TodoListContex= createContext({});
export default function TodoList({ todos, setTodos }) {
  const markAsCompleted = (taskId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === taskId) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <ul className="todoItems">
      <List items={todos} Component={TodoItem}/>
      <TodoListContex.Provider value={markAsCompleted}/>
    </ul>
  );
}
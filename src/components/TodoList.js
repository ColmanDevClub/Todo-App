import React, { useState } from "react";
import TodoItem from "./TodoItem";
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
      {todos.map((item) => {
        return (
          <TodoItem
            key={item.id}
            content={item.content}
            id={item.id}
            isCompleted={item.isCompleted}
          />
        );
      })}
    </ul>
  );
}

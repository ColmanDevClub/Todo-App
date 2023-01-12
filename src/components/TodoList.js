import React, { useState } from 'react'

export default function TodoList({ todos, setTodos }) {
    const markAsCompleted = (taskId) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === taskId) {
                return {...todo, isCompleted: !todo.isCompleted};
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

  return (
    <ul className='todoItems'>
        {todos.map(item => {
            return (
                <div className='control-group'>
                    <label className='control-control-group'>
                <li key={item.id} className='items' >
                    <input  id='check' type='checkbox' checked={item.isCompleted} onChange={()=>markAsCompleted(item.id)}/>
                    {item.content}
                </li>
                </label>
                </div>
            )
        })}
    </ul>
  )
}



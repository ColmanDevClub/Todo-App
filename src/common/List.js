import React from 'react'
import { useContext } from 'react';
import { TodoListContex } from '../components/TodoList';
export default function List({items,Component}) {
    const markAsCompleted=useContext({TodoListContex});
  return <> {items.map (item => <Component 
    key={item.id}
    content={item.content}
    id={item.id}
    isCompleted={item.isCompleted}
  />)}
  </>
}

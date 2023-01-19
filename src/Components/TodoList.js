import TodoItem from "./TodoItem";
import React from "react";
import {createContext} from "react";
import List from "./Common/List"

export const TodoListContext = React.createContext({});

const TodoList = ({setTodos, todos}) => {


    const handleTodoClick = (index) => {
        const newTodos = [...(todos)];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        setTodos(newTodos);
    };
    const handleTodoRemove = (index) => {
        const newTodos = [...todos.slice(0, index), ...todos.slice(index + 1)];
        setTodos(newTodos);
    };

    return (
        <div>
            <TodoListContext.Provider value = {{handleTodoClick}}>
            <List items={todos} Component={TodoItem}/>
            </TodoListContext.Provider>
        </div>
    );
};

export default TodoList;
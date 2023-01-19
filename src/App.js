import React, {useState} from "react";
import './App.css'
import TodoList from "./Components/TodoList";
import Input from "./Components/Input";
import Heading from "./Components/Title";
import Options from "./Components/Options";

const App = () => {
    const [task, setTask] = useState('');
    const [todos, setTodos] = useState([]);

    return <div>
        <Heading/>
        <Input
            task={task} setTask={setTask} todos={todos} setTodos={setTodos}/>
      <TodoList
        task={task} setTask={setTask} todos={todos} setTodos={setTodos}/>
        <Options  task={task} setTask={setTask} todos={todos} setTodos={setTodos}/>
    </div>;
}
export default App;
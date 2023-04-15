import React, {useState} from 'react'
import ToDoForm from './ToDoForm'

function ToDoList() {
     const [todos, setTodos] = useState([]);

     const addToDo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
          return;
        }
        
        const newToDos = [todo, ...todos];

        setTodos(newToDos);
        console.log(...todos);

     };

  return (
    <div>
      <h1>Hey Josh! What's the plan for today?</h1>
      <ToDoForm onSubmit={addToDo}/>
    </div>
  )
}

export default ToDoList;


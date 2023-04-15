import React, {useState} from 'react'
import ToDoForm from './ToDoForm'
import ToDo from './ToDo';

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

     const completeTodo = id => {
      let updatedTodos = todos.map(todo => {
        if (todo.id === id) {
          todo.isComplete = !todo.isComplete
        }
        return todo
      })
      setTodos(updatedTodos);
     }

  return (
    <div>
      <h1>Hey Josh! What's the plan for today?</h1>
      <ToDoForm onSubmit={addToDo}/>
      <ToDo 
      todos={todos}
      completeTodo={completeTodo}
      />
    </div>
  )
}

export default ToDoList;


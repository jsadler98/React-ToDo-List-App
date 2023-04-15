import React, {useState} from 'react';
import ToDoForm from './ToDoForm';
import { FaRegTrashAlt } from "react-icons/fa";
import { FaQuidditch } from "react-icons/fa";


function ToDo({todos, completeTodo, removeTodo, updateTodo}) {
    const [edit, setEdit] = useState ({
        id: null,
        value:''
    });


    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if(edit.id) {
        return <ToDoForm edit={edit} onSubmit={submitUpdate}/>;
    }
    

  return todos.map((todo, index) => (
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} 
    key={index}
    >

        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
        </div>

        <div className="icons">
         <FaRegTrashAlt 
         onClick={() => removeTodo(todo.id)}
         className='delete-icon'
         />
         <FaQuidditch
         onClick={() => setEdit({id: todo.id, value: todo.text})}
         className='edit-icon'
         />
        </div>

    </div>
  ))
}

export default ToDo
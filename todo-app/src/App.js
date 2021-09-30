import React from 'react'
import { useState, useEffect } from 'react';


import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';


import "./App.css"
import "./style/style.css"
// import { FormatColorReset } from '@mui/icons-material';
// import { style } from '@mui/system';



const App = () => {

  //use local storage data
  const getTodos = () => {
    const temp = localStorage.getItem("todos")
    if (temp) {
      return JSON.parse(temp);
    }
    return [];
    //try catch ile error fırlatılabilir. 
  }

  //hooks

  // saving our todos
  const [todos, setTodos] = useState([]);


  // set todos here or adding todos here 
  const [todo, setTodo] = useState("");

  // edit todo hook
  const [todoEditing, setTodoEditing] = useState(null)
  const [editingText, setEditingText] = useState("")




  useEffect(() => {
    setTodos(getTodos())
  }, [])


  //save data to local storage
  useEffect(() => {
    const jsonTemp = JSON.stringify(todos)
    localStorage.setItem("todos", jsonTemp)
  }, [todos])

  // submit function
  function handleSubmit(e) {
    e.preventDefault();

    // giving id to todos is important for differentiate todos
    const newTodo = {
      id: new Date().getTime(), // with this variable, we get a unique id for every todo item
      text: todo,
      completed: false,
    }

    setTodos([...todos].concat(newTodo)) // adding new todos without changing original array
    setTodo("") // after enter a todo, this cleans the input area.
  }


  // delete function
  function deleteTodo(id) {
    const updatedTodos = [...todos].filter((todo) => todo.id !== id)

    setTodos(updatedTodos);
  }

  // complete function
  function toggleComplete(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })
    setTodos(updatedTodos)
  }

  function editTodo(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText
      }

      return todo;
    })
    setTodos(updatedTodos)
    setTodoEditing(null)
    setEditingText("");
    //reseting edits
  }

  return (
    <div className="App">
      <h2>Yapılacaklar Listesi</h2>
      <form onSubmit={handleSubmit}>

        {/* set our todo to what we enter the input area */}
        <input
          className={"add-input"}
          type="text" autoFocus onChange={(e) => setTodo(e.target.value)} value={todo}
        />

        <IconButton type="submit">
          <AddCircleOutlineOutlinedIcon />
        </IconButton>
      </form>

      {todos.map((todo) => <div className="todo-item"
        onClick={() => toggleComplete(todo.id)}
        key={todo.id}>

        <Checkbox onChange={() => toggleComplete(todo.id)} checked={todo.completed}
        />

        {todoEditing === todo.id ? (<input className="edit-text"
          type="text" onChange={(e) => setEditingText(e.target.value)} value={editingText}
        />)
          : (<div className="todo-item">{todo.text}</div>)}

        <div className="btn-box">

          <IconButton aria-label="delete" onClick={() => deleteTodo(todo.id)}>
            <DeleteIcon />
          </IconButton>

          {todoEditing === todo.id ? (<IconButton aria-label="edit" onClick={() => editTodo(todo.id)}>
            <SendOutlinedIcon />
          </IconButton>) : (<IconButton aria-label="edit" onClick={() => setTodoEditing(todo.id)}>
            <ModeEditOutlineOutlinedIcon />
          </IconButton>)}

        </div>
      </div>
      )}

      


    </div>
  )
}

export default App

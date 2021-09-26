import React from 'react'
import { useState, useEffect } from 'react';
import "./App.css"

const App = () => {
  //hooks

  // saving our todos
  const [todos, setTodos] = useState([]);
  // set todos here or adding todos here 
  const [todo, setTodo] = useState("");
  // edit todo hook
  const [todoEditing, setTodoEditing] = useState(null)
  const [editingText, setEditingText] = useState("")

  //use local storage data
  useEffect(()=> {
    const temp = localStorage.getItem("todos")
    const loadedTodos = JSON.parse(temp)

    if (loadedTodos){
      setTodos(loadedTodos)
    }
  }, [])
  
  
  //save data to local storage
  useEffect(()=>{
    const jsonTemp = JSON.stringify(todos)
    localStorage.setItem("todos", jsonTemp)
  }, [todos])

  // submit function
  function handleSubmit(e) {
    e.preventDefault();

    // giving id to todos is important for differentiate todos
    const newTodo ={
      id: new Date().getTime(), // with this variable, we get a unique id for every todo item
      text: todo,
      completed: false,
    }

    setTodos([...todos].concat(newTodo)) // adding new todos without changing original array
    setTodo("") // after enter a todo, this cleans the input area.
  }

  // delete function
  function deleteTodo(id) {
    const updatedTodos = [...todos].filter((todo)=>todo.id !== id)

    setTodos(updatedTodos);
  }

  // complete function
  function toggleComplete(id) {
    const updatedTodos = [...todos].map((todo)=>{
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo
    })

    setTodos(updatedTodos)
  }

  function editTodo(id) {
    const updatedTodos = [ ...todos].map((todo)=> {
      if (todo.id === id){
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
      <form onSubmit={handleSubmit}>

        {/* set our todo to what we enter the input area */}
        <input
        type="text" autoFocus onChange={(e) => setTodo(e.target.value)} value={todo} 
        />

        <button type="submit">Add Todo</button>
      </form>
      {todos.map((todo) => <div key={todo.id}>

      {/* if we have a todo item we can edit this item, else we can enter an item */}

      {todoEditing === todo.id ? (<input 
        type="text" onChange={(e)=> setEditingText(e.target.value)} value={editingText} 
        />) 
        : (<div>{todo.text}</div>) }
        
        


        <button 
        onClick={() => deleteTodo(todo.id)}>Delete</button>
        
        <input 
        type="checkbox" onChange={()=> toggleComplete(todo.id)} checked={todo.completed}
        />

        {todoEditing === todo.id ? (<button onClick={()=>editTodo(todo.id)} >Submit Edit</button>) : (<button onClick={()=>setTodoEditing(todo.id)}>Edit Todo</button>)}
        
        


        </div>)}
    </div>
  )
}

export default App

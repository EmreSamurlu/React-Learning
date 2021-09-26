import React from 'react'
import "./App.css"

const App = () => {
  //hooks

  // saving our todos
  const [todos, setTodos] = React.useState([]);
  // set todos here or adding todos here
  const [todo, setTodo] = React.useState("");

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

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>

        {/* set our todo to what we enter the input area */}
        <input
        type="text" autoFocus onChange={(e) => setTodo(e.target.value)} value={todo} 
        />

        <button type="submit">Add Todo</button>
      </form>
      {todos.map((todo) => <div key={todo.id} >
        <div>{todo.text}</div>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        <input type="checkbox" onChange={()=> toggleComplete(todo.id)} checked={todo.completed}/>
        </div>)}
    </div>
  )
}

export default App

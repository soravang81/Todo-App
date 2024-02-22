import { useState } from 'react'
import './App.css'
import {CreateTodo} from "../Components/CreateTodos"
import {ShowTodos} from "../Components/ShowTodo"

function App() {
  const [todos ,setTodo] = useState([])

  async function getData(){
  const response = await fetch("http://localhost:3000/todos")
  const data = await response.json();
  const todo = await data.todo
  setTodo(todo)
  }
  getData();

  return (
    <div>
      <CreateTodo onAddTodo={getData}/>
      <ShowTodos todos={todos} onUpdateTodo={getData} />
    </div>
  )
}

export default App

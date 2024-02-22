import {useEffect , useState } from 'react'
import './App.css'
import {CreateTodo} from "./CreateTodos"
import {ShowTodos} from "./ShowTodo"

function App() {
  const [todos ,setTodo] = useState([])
  async function getData(){
  const response = await fetch("http://localhost:3000/todos")
  const data = await response.json();
  const todo = await data.todo
  setTodo(todo)
  }useEffect(() => {
    getData(); 
  }, []);

  return (
    <div>
      <CreateTodo onAddTodo={getData}/>
      <ShowTodos todos={todos} onUpdateTodo={getData} />
    </div>
  )
}

export default App

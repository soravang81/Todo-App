export function ShowTodos({ todos }) {
  function markDone(e){
    
  }
    return (
      <div>
        {todos.map((todo,index) => (
          <div key={index}>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button onClick={markDone}>Mark as Complete</button>
          </div>
        ))}
      </div>
    )
  }
  
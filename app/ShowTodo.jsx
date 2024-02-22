export function ShowTodos({ todos, onUpdateTodo }) {
  async function markDone(id) {
    const res = await fetch("http://localhost:3000/completed", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ _id: id })
    });
    if (res.ok) {
      onUpdateTodo();
    } else {
      console.error("Failed to mark todo as completed.");
    }
  }

  return (
    <div>
      {todos.map((todo,index) => (
        <div key={index}>
          <h1>{todo.title}</h1>
          <h2>{todo.description}</h2>
          <h2>{todo.completed ? "Completed" : "Incomplete"}</h2>
          <button onClick={() => markDone(todo._id)}>
            {todo.completed ? "Mark as Incomplete" : "Mark as Complete"}
          </button>
        </div>
      ))}
    </div>
  )
}

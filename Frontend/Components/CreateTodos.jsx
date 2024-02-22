import { useState } from "react";

export function CreateTodo({onAddTodo}){
    const [newTitle,setNewTitle] = useState("")
    const [newDescription,setNewDescription] = useState("")
    const newTodo = {
        title : newTitle,
        description : newDescription,
        completed : false
    }
    async function sendTodo(){
        console.log(JSON.stringify(newTodo))
        const res = await fetch("http://localhost:3000/todo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },body: JSON.stringify(newTodo)
        }); 
         onAddTodo();
    }
    function changeValue1(e){
        setNewTitle(e.target.value);
    }
    function changeValue2(e){
        setNewDescription(e.target.value);
    } 
    return(
        <div>
            <input type="text" placeholder="Enter Title of todo" onChange={changeValue1}  ></input><br/><br/>
            <input type="text" placeholder="Enter Description of todo" onChange={changeValue2} ></input><br/><br/>
            <button  onClick={sendTodo}>Add New Todo</button>
        </div>
    )
}
    
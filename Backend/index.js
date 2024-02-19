const express = require("express");
const app = express();
app.use(express.json());
const {createTodo} = require("./zod");
const {Todo_App} = require("./db")
const cors = require("cors")
app.use(cors())


app.post("/todo" ,async (req,res)=>{
    const inputs = req.body;
    const isParsed = createTodo.safeParse(inputs);
    if(!isParsed.success){
        res.status(411).json({
            error : "invalid inputs !"
        })
        return;
    }
    const title = req.body.title;
    const description = req.body.description;
    const completed = req.body.completed;
    const newTodo = new Todo_App({title , description, completed});
    try{
        await newTodo.save();
        res.json({
            msg : "Data uploaded succesfully!"
        })
    }
    catch(e){
        res.status(409).json({
            error : e
        })
    }
})

app.get("/todos" , async (req,res)=>{
    const todo = await Todo_App.find();
    res.json({todo})
})

app.put("/completed" ,async (req,res)=>{
    const inputs = req.body;
    const isParsed = createTodo.safeParse(inputs);
    if(!isParsed.success){
        res.status(411).json({
            error : "invalid inputs !"
        })
        return;
    }
    const updatetodo = await Todo_App.updateOne(
        _id = inputs._id
    ,{
        completed : true
    })
    res.json({
        msg : "Marked completed !"
    })
})

app.listen(3000);

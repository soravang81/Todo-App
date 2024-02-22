const db = require("mongoose")
db.connect("mongodb+srv://soravang81:Sorav%401@souravangraldb.lfaakvp.mongodb.net/Todo-App");

const createTodoSchema = {
    title : String,
    description : String,
    completed : Boolean
}

const Todo_App = db.model("Todo_App" , createTodoSchema);
module.exports = {
    Todo_App,
}
#! /usr/bin/env node 

import inquirer from "inquirer";
let todos = []
let condition = true 
while (condition)

{
let addTask= await inquirer.prompt ([
    {
        name:"todo",
        type : "input",
        message: " What do you Want to Add in Todo List ?"
    },

    {
        name: "addMore",
        type: "confirm ",
        message : "Do You want to add more in Todo List ? " ,
    
    }]
);

todos.push(addTask.todo);
condition = addTask.addMore;
console.log(todos);
}
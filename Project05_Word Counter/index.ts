import inquirer from "inquirer"
let todo : string[] = [];
let loop = true;
while(loop){
    const answer:{
        ToDo : string,
        addMore : boolean
    } = await inquirer.prompt([{
        type : "input",
        name: "ToDo",
        message : " What do you want to add in your todo?"
    
    },
    {
    type : "confirm",
    name : "addMore",
    message : "Do you want o add more?",
    default : "false"
     }])
     
const {ToDo,addMore} = answer;
console.log(answer)
   loop = addMore
if(ToDo){
todo.push(ToDo)
}
else{
    console.log("Kindly add valid inputs")
}
}

if(todo.length>0){
    console.log("Your todo list: \n")
    todo.forEach(todo=>{
        console.log(todo)
    })
}else{
    console.log("No todo Found")
}

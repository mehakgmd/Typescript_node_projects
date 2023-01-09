// import inquirer from "inquirer";
// import { type } from "os";
// function welcomeMsg(msg: string): void 
//    {
//     console.log(msg + "\n");
//    }
//    welcomeMsg("Welcome to Best Calculator");
// let again = false;
// type answer = {
//     numberOne : number
//     numberTwo : number
//     Operator : string
// } 
// const UserInput: answer = await inquirer.prompt([
//     {
//         type : "input",
//         name : "numberOne",
//         message : "Enter FirstNumber",
//         validate : function(input){
//             if(isNaN (input) || input === ""){
//                 return "Not Valid Input";
//             }
//             else{
//                 return true;
//             }
//         }
//     },
//     {
//         type : "list",
//         name : "Operator",
//         choices : ["*","+","-","/","^"],
//         message : "Select Operator"
//     },
//     {
//         type : "input",
//         name : "numberTwo",
//         message : "Enter SecondNumber",
//         validate: function(input){
//             if(isNaN(input) || input === ""){
//                 return"Not Valid Input"
//             }
//             else{
//                 return true;
//             }
//         }
//     },
// ])
// const FirstNumber = Number(UserInput.numberOne);
// const SecondNumber = Number(UserInput.numberTwo)
// switch(UserInput.Operator){
//     case "+":
//     console.log(`Result: ${FirstNumber+SecondNumber}`)
//     break;
//     case"-":
//     console.log(`Result: ${FirstNumber-SecondNumber}`)
//     break;
//     case"*":
//     console.log(`Result: ${FirstNumber*SecondNumber}`)
//     break;
//     case"/":
//     console.log(`Result: ${FirstNumber/SecondNumber}`)
//     break;
//     case"^":
//       console.log(`Result: ${FirstNumber^SecondNumber}`)
//       break;
//       default:
//       break;
// }
// const { confirm } = await inquirer.prompt([
//     {
//         name: "confirm",
//         message: "Do you want to do another calculation?",
//         type: "confirm",
//     }
// ])
// {
//     again = confirm;
// console.log("\n\n")
// }
import inquirer from 'inquirer';
// Weclome users
// take inputs and operation
// validate user input
// compute results and show them
// try again?
let again = false;
function welcomeMsg(msg) {
    console.log(msg + "\n");
}
async function getInputFromUser() {
    const answers = await inquirer.prompt([
        {
            name: "firstNumber",
            message: "Enter first number",
            type: "input",
            validate: function (input) {
                if (isNaN(input) || input === "") {
                    return "Not a valid input";
                }
                else {
                    return true;
                }
            }
        },
        {
            name: "operation",
            message: "Choose an operation",
            type: "list",
            choices: ["+", "-", "x", "/", "^", "%"]
        },
        {
            name: "secondNumber",
            message: "Enter second number",
            type: "input",
            validate: function (input) {
                if (isNaN(input) || input === "") {
                    return "Not a valid input";
                }
                else {
                    return true;
                }
            }
        }
    ]);
    const firstNumber = Number(answers.firstNumber);
    const secondNumber = Number(answers.secondNumber);
    switch (answers.operation) {
        case "+":
            console.log(`Result: ${firstNumber + secondNumber}`);
            break;
        case "-":
            console.log(`Result: ${firstNumber - secondNumber}`);
            break;
        case "x":
            console.log(`Result: ${firstNumber * secondNumber}`);
            break;
        case "/":
            console.log(`Result: ${firstNumber / secondNumber}`);
            break;
        case "%":
            console.log(`Result: ${firstNumber % secondNumber}`);
            break;
        case "^":
            console.log(`Result: ${firstNumber ** secondNumber}`);
            break;
        default:
            break;
    }
    const { confirm } = await inquirer.prompt([
        {
            name: "confirm",
            message: "Do you want to do another calculation?",
            type: "confirm",
        }
    ]);
    again = confirm;
    console.log("\n\n");
}
welcomeMsg("Welcome to the class2 Calculator");
do {
    getInputFromUser();
} while (again);

import inquirer from 'inquirer';

type ansType = {
    userGuess: number
}

const systemGeneratedNo = Math.floor(Math.random() * 10);


const answers : ansType = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Write your guess b/w 1 to 10: "
    }
])

const {userGuess} = answers;

console.log(userGuess, "userGuess", systemGeneratedNo, 'computer')
if(userGuess === systemGeneratedNo){
    console.log("Yeah Your answer is correct \n You Win!")
} else {
    console.log("Please try again \n Best of Luck!")
}

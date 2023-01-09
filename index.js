import inquirer from "inquirer";
(async () => {
    const userInput = await inquirer.prompt([
        {
            name: "userId",
            message: "Enter your user Id",
            type: "input"
        },
        {
            name: "userPin",
            message: "Enter your pin",
            type: "password"
        }
    ]);
    console.log("User Id", userInput.userId);
    console.log("User Pin", userInput.userPin);
    const userData = {
        userId: userInput.userId,
        userPin: userInput.userPin,
        amount: Math.floor(Math.random() * 100000 + 1)
    };
    console.log(userData);
    const selectedOpt = await inquirer.prompt([
        {
            name: "options",
            message: "Select Any Options",
            type: "list",
            choices: ["cash withdrawl", "exit"]
        }
    ]);
    if (selectedOpt.options === "cash withdrawl") {
        console.log("Your current amount:", userData.amount);
        const enterAmount = await inquirer.prompt([
            {
                message: "Enter your amount",
                name: "amount",
                type: "number",
                validate: (input) => {
                    if (input > userData.amount) {
                        return "Insufficient Balance";
                    }
                    else {
                        return true;
                    }
                }
            }
        ]);
        userData.amount -= enterAmount.amount;
        console.log("Amount after withdrawl:", userData.amount);
    }
})();

import inquire from "inquirer" 

const ans = await inquire.prompt([{
    type:"number",
    name: "first_number",
    message: "Enter your First Number: "
},
{
    type:"number",
    name: "second_number",
    message: "Enter your Second Number: "
},
{
    type:"list",
    name: "operator",
    message: "please select operation type:",
    choices:["Addition","Subtraction","Multiplication","Division"]
}
])

if(ans.operator === "Addition") {
    console.log(ans.first_number + ans.second_number);
}
else if(ans.operator === "Subtraction") {
    console.log(ans.first_number - ans.second_number);
}
else if(ans.operator === "Multiplication") {
    console.log(ans.first_number * ans.second_number);
}
else{
    console.log(ans.first_number / ans.second_number)
}
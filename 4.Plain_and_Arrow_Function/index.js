// function defination
function sayMyName(){
    console.log("Heisenberg from Breaking Bad")
}

function printCounting(){
    for(let i=1; i<=10; i++){
        console.log(i)
    }
}

// num is the parmeter
function printSquare(num){
    console.log("Printing Square:",num**2);
}

// Return Function
function getSum(a, b, c){
    let sum = a+b+c;
    return sum;
    // What written after the return statement is unreachable statements
}

function getMyName(firstName, lastName) {
    let fullName = firstName+" "+lastName;
    return fullName;
}

// Function Expression
const getMultiplication = function(a, b){
    return a*b;
}

// Arrow function
let getExp = (x, y) => {
    let ans = x**y;
    return ans;
}





// function use - function call
sayMyName();

printCounting()

// 5 is the argument
printSquare(5)


// Function call a Return function
let ans = getSum(34, 55, 54);
console.log("Printing Sum:",ans);

let yourName = getMyName("Walter", "White");
console.log("Full Name:",yourName);

console.log("Full Name:",getMyName(7, 7));

let multiplication = getMultiplication(2, 20);
console.log("multiplication is:",multiplication)

console.log("Print exponencial:",getExp(2, 10));

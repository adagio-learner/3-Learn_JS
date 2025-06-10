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
    console.log("Printing Square:",num);
}

// Return Function
function getSum(a, b, c){
    let sum = a+b+c;
    return sum;
}

function getMyName(firstName, lastName) {
    let fullName = firstName+" "+lastName;
    return fullName;
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



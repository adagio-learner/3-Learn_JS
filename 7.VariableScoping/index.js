// Variable scoping

// Global Scoped
// let age = 15;
// const age = 15;
var age = 15;

console.log(age);

{
    console.log(age-1);
}

function tellAge(){
    console.log(age-3)
}

if (true){
    console.log(age-2)
}

for(let i=0; i<2; i++){
    console.log(age+i);
}



// Function Scoped
function sayHello(){
    var fullName = "Earth"
    console.log("Hello Planet",fullName);
}
// console.log(fullName);     
// // ReferenceError
sayHello();



// Block Scoped
{
    let myName = "Adagio-Learner"
    // const myName = "Adagio-Learner"
    console.log(myName)
}
// console.log(myName)
// // ReferenceError

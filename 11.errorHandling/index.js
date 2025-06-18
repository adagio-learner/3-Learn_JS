// // Compile time error
// // syntax error
// console.log(1;

// // Runtime error
// // runtime error
// console.log(x);

try{
    console.log("try block starts here");
    console.log(age);
    console.log("try block ends here");
}
catch(err){
    // define how to handle error or what to do when error appear
    console.log("I am inside catch block")
    console.log("Your error is here:",err)
}

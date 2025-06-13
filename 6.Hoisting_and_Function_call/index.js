console.log("-----variable hoisting-----")
console.log(age);
var age = 25;
// // output: undefined

// console.log(age);
// let age = 25;
// // output: ReferenceError

// console.log(age);
// const age = 25;
// // output: ReferenceError

console.log("-----function hoisting-----")
sayMyName("adagio-lerner");

function sayMyName(firstName){
    console.log(firstName);
}
// // function run normally

// sayHello()
// let sayHello = function (){
    //     console.log("Hello everyone and this is function by declaration")
    // }
    // // output: ReferenceError
    
    // const object1 = new Human();
    // class Human{ 
        // }
        // // output: ReferenceError
        
        function greet(){
            console.log("Greeting of the day")
        }
        
        const arr = [
            function(a, b){
                return a+b;
            },
            function(a, b){
                return a-b;
            },
            function(a, b){
                return a*b;
            },
            function(a, b){
                return a/b;
            }
        ];
        
        let first = arr[0];
        let ans = first(5, 10);
        console.log(ans)
        
        
        console.log(greetFunction)
        var greetFunction = function(){
            console.log("greeting with function with variable declaration")
        }
        // // output: undefined
        
// closure = { function + required data(or)lexical scope(or)surrounding state }

// nested function
function init(){
    var name = "Adagio"; // name is a local variable created by init
    function displayName(){
        // displayName() is the inner function, that forms a closure
        console.log(name); // use variable declared in the parent function
    }
    displayName();
}
init();


// nested function
function outerFunction(){
    var name = "Adagio";
    function innerFunction(){
        let name = "Learner"
        {
            let name = "anything"
        }
        console.log(name);
    }
    innerFunction();
}
outerFunction();


function firstFunction(){
    let name = "Adagio Learner";

    function nestedFunction(){
        console.log(name);
    }
    return nestedFunction;
}
let nested = firstFunction();

nested();

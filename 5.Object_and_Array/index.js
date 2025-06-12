// Reference type Datatype
// 1) Array => collection of item
// 2) Object => collection of key value pair
// 3) Function

let obj = {
    "full name": "adagio lerner",
    age: 25,
    weight: 85,
    height: "5ft 8in",
    greet: function(){
        console.log("Hello everybody how are you");
    }
};

console.log(obj);
obj.greet();


// Creation of arrays
let arr = [1, 2, 3, 4, 5, 6, 7];
// Array constructor
let brr = new Array("adagio", 1, true);

console.log(arr);
console.log(brr[0]);
console.log(brr[2]);

// Build in function in array
// push: insert at end
// pop: remove at end
// shift: remove first item
// unshift: insert first item


console.log(brr);
brr.pop();
brr.push("learner")
console.log(brr);
brr.shift()
brr.unshift("ADAGIO")
console.log(brr);
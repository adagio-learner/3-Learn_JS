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
let brr = new Array("adagio", 1, true, false, "learner");

console.log(arr);
console.log(brr[0]);
console.log(brr[2]);

// Build in function in array(array method)
// push: insert at end
// pop: remove at end
// shift: remove first item
// unshift: insert first item
// slice: create new part from array
// splice: change content of array by inserting, replacing, removing

console.log(brr);

brr.pop();
brr.push("Learner")
console.log(brr);

brr.shift()
brr.unshift("Adagio")
console.log(brr);

console.log(brr.slice(2,4))

brr.splice(1, 3, "-")
console.log(brr);

// Higher-order methods

// map
let num = [ 10, 20, 30 ];

let ansArray = num.map((number, index) => {
    console.log(`${index} : ${number + 1}`)
    return number*number
})
console.log(ansArray);

// 
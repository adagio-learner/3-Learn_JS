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
    console.log(`Index = ${index} : Number = ${number + 1}`)
    return number*number
})
console.log(ansArray);

// filter
let arrFil = [ 10, 20, 30, 11, 21, 44, 51 ]
let evenArray = arrFil.filter((number) => {
    return number%2 === 0;
    // if (number % 2 === 0) {
    //     return true;
    // }else{
    //     return false;
    // }
});
console.log(evenArray);

let crr = new Array("adagio", 1, true, false, "learner");
let numFilter = crr.filter((value) => {
    if(typeof(value) === "string"){
        return true;
    }else{
        return false;
    }
})
console.log(numFilter)

// reduce( accumulator, current)
let drr = [ 10, 20, 30, 40 ];
let sumByReduce = drr.reduce((acc, curr) => {
    return acc + curr;
}, 0);
console.log(sumByReduce);

// sort
let err = [ 5, 4, 52, 15, 56, 12, 54 ];
// using a compare function
err.sort((a, b) => a-b);
console.log(err);

// indexOf
console.log(err.indexOf(2));

// forEach
let frr = [ 10, 20, 30 ];
frr.forEach((value, index) => {
    console.log("Number: ", value, "Index: ", index);
})

// for-in
for(let key in obj){
    console.log(key, ":", obj[key]);
}

// for of
let fullName = "adago-lerner";
for(let val of fullName){
    console.log(val);
}

// array with function
let grr = [ 10, 20, 30, 40, 50 ];
function getSum(grr){
    let length = grr.length;
    let sum = 0;
    for(let index=0; index<length; index++){
        sum = sum + grr[index];
    }
    return sum
}

let totalSum = getSum(grr);
console.log(totalSum);

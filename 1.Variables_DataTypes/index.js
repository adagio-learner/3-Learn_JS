console.log("-----variable using var-----");
var global_Age = 42;

if (true) {
    console.log(global_Age);
}

console.log("---------------------------------");

function solve() {
    var local_age = 25;
    console.log(local_age);
}
// console.log(local_age);                // ReferenceError: local_age is not defined

solve();

console.log("---------------------------------");
console.log("-----variable using let-----");
// let is Block scope and no redefination is allowed.
{
    let a = 10;
    console.log(a);
}
{
    let b = 10;
}
// console.log(b);                         // ReferenceError: b is not defined

console.log("---------------------------------");
console.log("-----variable using const-----");

const big = 55;
console.log(big);

// big = 65;
// console.log(big);
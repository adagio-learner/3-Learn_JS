console.log("-----ternary operator-----");
let age = 17;
activeVoter = (age >= 18)? "allowed to vote":"not allowed to vote";
console.log(activeVoter);

age = 21;
activeVoter = (age > 18)? "allowed to vote":"not allowed to vote";
console.log(activeVoter);

console.log();

console.log("-----bitwise oprator-----");
console.log(2 & 5)
console.log(2 | 5)
console.log(~ (0))
console.log(2 ^ 2)
console.log(32 ^ 16)
console.log(10 << 1)
console.log(10 >> 1)
console.log(9 >> 1)


console.log("-----Conditonals-----");

age = 18;
if(age >=  18) {
    console.log("Can vote")
}else{
    console.log("cannot vote")
}

console.log("-----Switch-----");

let num = 3;

switch(num) {
    case 1: console.log("A");
    break;
    case 2: console.log("B");
    break;
    case 3: console.log("C");
    break;
    case 4: console.log("D");
    break;
    default: console.log("F");
}

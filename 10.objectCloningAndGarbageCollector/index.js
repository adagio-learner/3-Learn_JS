let src = {
    age: 12,
    wt: 68,
    ht: 180
}

let src1 = {
    value:101,
    name:"Adagio Learner"
}

console.log(src);

src.color = "white";
console.log("src:",src);

let thing = src;
// thing and src are the reference of same srcect
console.log("thing:",thing);

// Object cloning using Spread oprator
let dest = {...src};
console.log("Clone by spread oprator:",dest);

// Object cloning using assign
let assignDest = Object.assign({}, src, src1);
console.log("Clone by assign:",assignDest);

src.age = 15;
console.log("src:",src);

// Object cloning using iteration
let iterationDest = {};

for(let key in src){
    let newKey = key;
    let newValue = src[key];
    // inset newKey and value in dest and create a clone
    iterationDest[newKey] = newValue
}
console.log("Clone by iteration",iterationDest)

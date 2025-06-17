let src = {
    age: 12,
    wt: 68,
    ht: 180
}

let src1 = {
    value:101,
    name:"Adagio Learner"
}

console.log(src)

src.color = "white";
console.log("src:",src)

let thing = src;
// thing and src are the reference of same srcect
console.log("thing:",thing);

// Object cloning using Spread oprator
let dest = {...src}
console.log("Clone by spread oprator:",dest)

// Object cloning using assign
let assignDest = Object.assign({}, src, src1)
console.log("clone by assign:",assignDest)

src.age = 15;
console.log("src:",src)
let src = {
    age: 12,
    wt: 68,
    ht: 180
}
console.log(src)

src.color = "white";
console.log("src:",src)

let thing = src;
// thing and src are the reference of same srcect
console.log("thing:",thing);

// Object cloning using Spread oprator
let dest = {...src}
src.age = 15;
console.log("src:",src)
console.log("dest:",dest)




// code   1
const t1 = performance.now()

for(let i=1; i<=100; i++){
    let para = document.createElement("p");
    para.textContent = "This is para " + i;
    document.body.append(para);
}

const t2 = performance.now();

console.log("total time taken by code 1: " + (t2-t1));



// code   2
const t3 = performance.now();

let mydiv =  document.createElement("div");

for(let i=1; i<=100; i++){
    let para = document.createElement("p");
    para.textContent = "This is para " + i;
    mydiv.appendChild(para);
}
document.body.appendChild(mydiv);

const t4 = performance.now();

console.log("total time taken by code 1: " + (t4-t3));



// best and fast code by using documentFragment
let fragment = document.createDocumentFragment();

for(let i=1; i<=100; i++){
    let para = document.createElement("p");
    para.textContent = "this is the para created by documentFragment" + i;
    // No reflow and NO repaint for the below line
    fragment.appendChild(para);
}

// 1 reflow and 1 repaint will occur by below the line.
document.body.appendChild(fragment);

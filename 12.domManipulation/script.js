// create  and add element
let myDiv = document.querySelector("#myDiv");

let newElement = document.createElement("span")
newElement.textContent = "adagio learner"


myDiv.insertAdjacentElement("beforebegin", newElement);


let parent = document.querySelector("#myDiv");
// let parent = child.parent
let child = document.querySelector("#firstPara");
parent.removeChild(child)

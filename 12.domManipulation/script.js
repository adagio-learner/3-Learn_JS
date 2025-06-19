let myDiv = document.querySelector("#myDiv");

let newElement = document.createElement("span")
newElement.textContent = "adagio learner"


myDiv.insertAdjacentElement("beforebegin", newElement);

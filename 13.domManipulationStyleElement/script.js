let paraElement = document.getElementById("sPara");

paraElement.style.backgroundColor = "#ffafcc";



let secondElement = document.getElementById("sDiv");
// secondElement.style.cssText;
secondElement.style.cssText ="background-color: #669bbc; color: white; padding: 0.5rem";



let firstElement = document.querySelector("#fDiv");
firstElement.setAttribute("class","divclass")
firstElement.setAttribute("style","padding: 0.4rem")
// setAttribute remove the whole style from firstElement,then add new attribute


let fPara = document.getElementById("fPara");
fPara.className;
fPara.className = "Gohan zeno"
fPara.className;



// .classlist => get in the form of array
firstElement.classList;
firstElement.classList.add("thirdClass");
firstElement.classList.remove("firstClass");
firstElement.classList.toggle("secondClass");
firstElement.classList.toggle("secondClass");
firstElement.classList.contains("firstClass")
firstElement.classList.contains("secondClass")


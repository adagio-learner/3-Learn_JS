function changeText(event){
    console.log(event);
    let fPara = document.querySelector("#fPara");
    fPara.textContent = "Hello Everyone";
}


let fPara = document.querySelector("#fPara");

fPara.addEventListener("click", changeText);

// fPara.removeEventListener("click", changeText);


let anchorElement = document.querySelector("#fAnchor");



anchorElement.addEventListener("click", function(event){
    event.preventDefault();
    anchorElement.textContent = "Submitted"
})

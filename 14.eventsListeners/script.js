function changeText(){
    let fPara = document.querySelector("#fPara");
    fPara.textContent = "Hello Everyone";
}


let fPara = document.querySelector("#fPara");

fPara.addEventListener("click", changeText);

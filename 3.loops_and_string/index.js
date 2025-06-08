console.log("Forward Counting")
for(let i=0; i<5; i++){
    console.log(i+1)
}

console.log("Reverse Counting and Break")
for(let i=5; i>0; i--){
    if (i==2) {
        break;
    }else{
        console.log(i)
    }
}

console.log("Continue")
for(let i=0; i<5; i++){
    if(i==3){
        continue;
    }else(
        console.log(i+1)
    )
}

let j = 0;
while(j<5){
    console.log("Print by While Loop")
    j++;
}

console.log()

let i=0;
do{
    console.log("Print by Do-While loop")
    i++;
}while(i<5);
    
console.log("do-While atleast run at one time or run first iteration")
    
console.log()

let firstName = "jonathan"
let lastName = "Jostar"

let name = `Jonathan Jostar
Josep jostar
Jotaro Kujo`

console.log(firstName)
console.log(lastName)
console.log()
console.log(name)

let codeEditor = new String("VS Code")
console.log(codeEditor)

console.log("Concatination")
let lang1 = "English"
let lang2 = "spanish"

let language = lang1 +" "+ lang2
console.log(language)
let reverseLang = `${lang2} ${lang1}`
console.log(reverseLang)

console.log("Length if the String")
console.log(reverseLang.length)
console.log("Convert string to upper case")
console.log(lang1.toUpperCase())
console.log("Convert string to lower case")
console.log(lang2.toLowerCase())

console.log("Substring")
let str = "Hello my pupil"
console.log(str.substring(6))
console.log(str.substring(0, 5))

console.log("Split the array by following keyword ")
let words = str.split(" ")
console.log(words);

console.log("Joining the string")
console.log(words.join(","))

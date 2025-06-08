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
}while(i<5)

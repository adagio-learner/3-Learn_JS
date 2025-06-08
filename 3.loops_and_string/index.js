console.log("Forward Counting")
for(let i=0; i<5; i++){
    console.log(i+1);
}

console.log("Reverse Counting")
for(let i=5; i>0; i--){
    if (i==2) {
        break;
    }else{
        console.log(i);
    }
}

console.log()
for(let i=0; i<5; i++){
    if(i==3){
        continue;
    }else(
        console.log(i+1)
    )
}
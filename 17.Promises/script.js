let firstPromise = new Promise( (resolve, reject) =>{
    console.log("adagio learner");
    resolve(1001);
    // fulfill
} );

// let secondPromise = new Promise( (resolve, reject) =>{
    //     console.log("adagio learner");
    //     reject(new Error("Internal Server Error"));
    // } );
    
    
    let thirdPromise = new Promise( (resolve, reject) =>{

        function sayMyName() {
            console.log("My Name is Adagio Learner");
        }
        setTimeout(sayMyName, 10000);
        resolve(1);

    } );


    let fourthPromise = new Promise((resolve, reject) => {
        let success = true;
        if(success) {
            resolve("Promise Fullfilled");
        }else{
            reject("Promise Rejected")
        }
    })


    fourthPromise.then((message) => {
        console.log("then message is " + message);
    }).catch((error) => {
        console.log("Error: " + error);
    }).finally((message) => {
        console.log("this code will run in any condition")
    })


let prompmise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "First");
})
let prompmise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "second");
})
let prompmise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, "third");
})

Promise.all([prompmise3, prompmise2, prompmise1])
.then((values) => {
    console.log(values);
}).catch((error) => {
    console.error("error:" + error);
})

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


    let promise1 = new Promise((resolve, reject) => {
        let success = true;
        if(success) {
            resolve("Promise Fullfilled");
        }else{
            reject("Promise Rejected")
        }
    })


    promise1.then((message) => {
        console.log("then message is " + message);
    }).catch((error) => {
        console.log("Error: " + error);
    }).finally((message) => {
        console.log("this code will run in any condition")
    })

    promise.all([promise1, firstPromise, thirdPromise])
    .then(value) => {
        console.log(value);
    }

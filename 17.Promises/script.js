let firstPromise = new Promise( (resolve, reject) =>{
    console.log("adagio learner");
    resolve(1001);
} );

let secondPromise = new Promise( (resolve, reject) =>{
    console.log("adagio learner");
    reject(new Error("Internal Server Error"));
} );

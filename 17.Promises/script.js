let firstPromise = new Promise( (resolve, reject) =>{
    console.log("adagio learner");
    resolve(1001);
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


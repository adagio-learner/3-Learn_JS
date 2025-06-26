async function getData() {
    
    setTimeout(function(){
        console.log("I am inside set Timeout block")
    }, 3000);

}

getData();


// await


// fetch API

async function fetchApi() {
    let response = await fetch();
    // parse json -> async
    let data =  await response.json();
    console.log(data);
}
fetchApi();

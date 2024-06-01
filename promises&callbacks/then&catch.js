function SavetoDb(data){
    return new Promise((resolve, reject)=>{
        let internetSpeed = Math.floor(Math.random() * 10)+1;

        if (internetSpeed > 4){
            resolve("Success");
        }
        else{
            reject("Failure");
        }
    });
}

let request = SavetoDb("Niomi"); //request = promise
request.then(()=>{
    console.log("Data saved successfully");
    console.log(request);
})

.catch(()=>{
    console.log("Weak connection");
    console.log(request);
})
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

SavetoDb("Hello World")
    .then(()=>{
        console.log("Data saved successfully");
        return SavetoDb("Niomi");
    })
    .then(()=>{
        console.og("Data saved successfully");
        return SavetoDb("Soni");
    })
    .then(()=>{
        console.og("Data saved successfully");
    })
   .catch(()=>{
                console.log("Weak connection");
            });

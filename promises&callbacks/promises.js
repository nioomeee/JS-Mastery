// function SavetoDb(data, success, failure){
//     let internetSpeed = Math.floor(Math.random() * 10)+1;

//     if (internetSpeed > 4){
//         success();
//     }
//     else{
//         console.log("Weak connection!");
//     }
// }
// SavetoDb("Niomi", ()=>{
//     console.log("Succesfully data stored!");
//     SavetoDb("Soni", ()=>{
//         console.log("SucceLsfully data stored!");
//         SavetoDb("Hello World", ()=>{
//             console.log("SucceLsfully data stored!");
//         }, ()=>{
//             console.log("Weak connection");
//         })
//     }, ()=>{
//         console.log("Weak connection");
//     })
// }, ()=>{
//     console.log("Weak connection");
// })

function SavetoDb(data){
    return new Promise((resolve, reject)=>{
        let internetSpeed = Math.floor(Math.random() * 10)+1;

        if (internetSpeed > 4){
            resolve(console.log("Data saved successfully");
        }
        else{
            reject(console.log("Weak connection"));
        }
    });
}

SavetoDb("Niomi");

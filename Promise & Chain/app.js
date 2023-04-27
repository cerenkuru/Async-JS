// function getData(data){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
            
//             if(typeof data === "string"){
//                 // Olumlu
//                 resolve(data);
//             }
//             else {
//                 // Olumsuz
//                 reject(new Error("Lütfen string giriniz"));
//             }

//            // resolve("Olumlu sonuç");
//            // reject("Olumsuz sonuç");
//         },5000);


//     });



// }
// console.log(getData("Merhaba"));
// getData("Merhaba").then(function(response){ // resolve
//     console.log(response);

// })

// getData("Merhaba").catch(function(err){
//     console.log(err);

// })

// getData(12).then(function(response){
//     console.log("Gelen değer " + response);
// }).catch(function(err){
//     console.error(err);
// });

// getData(12).then(response => console.log("Gelen değer: " + response)).catch(err => console.error(err));


function addTwo(number){





    return new Promise((resolve,reject) => {
        setTimeout(function(){
            if(typeof number === "number"){
                resolve(number+2);
            }
            else {
                reject(new Error("Lütfen bir sayı girin"))
            }
        },3000);
    });
}

addTwo(10)
.then(response => {
    console.log(response);
    return response + 2;
}).then(response2 => console.log(response2))
.catch(err => console.error(err));
    
    // Promise Chain

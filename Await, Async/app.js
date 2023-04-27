// async function test(data){
    // Promise return new Promise
    // return data;
    // return new Promise((resolve,reject) => {
    //     resolve(data);
    // })

    // let promise = new Promise((resolve,reject) => {
    //     setTimeout(() => {
    //         resolve("bu bir değerdir.")
    //     },5000);
    // });

    // let response = await promise; // 5 saniye bekleyecek.
    // console.log(response);
    // console.log("Naber");


//     return response;

// }
// test("merhaba").then(response => console.log(response));



// async function testData(data) {



//     let promise = new Promise((resolve,reject) => {
//         setTimeout(()=> {
//             if (typeof data === "string"){
//                 resolve(data);
//             }
//             else {
//                 reject(new Error("Lütfen string bir değer girin"))
//             }
            
//         },5000);


//     });

//     const response = await promise;

//     return response;
// }

// testData(23)
// .then(data => console.log(data))
// .catch(err => console.log(err));


// async function getCurrency(url){

    // const response = await fetch(url); // Response Object
    // console.log(response);

//     const data = await response.json(); // Json object

//     console.log(data);


//     return data;
// }

// getCurrency("https://api.exchangerate.host/latest")
// .then(response => console.log(response));



// HTTP İstekleri

class Request {
    async get(url){ // Get Request
    //     return new Promise((resolve,reject) =>{       
    //     fetch(url)
    //     .then(response => response.json())
    //     .then(data => resolve(data))
    //     .catch(err => reject(err));
    // })

    const response = await fetch(url); // Response Object

    const data = await response.json() // JSON Object

    return data;

    }
    async post(url,data){
        // return new Promise((resolve,reject)=>{
        //     fetch(url,{
        //     method: "POST",
        //     body: JSON.stringify(data),
        //     headers: {
        //         "Content-type": "application/json; charset=UTF-8"
        //     }
        // })
        // .then(response => response.json())
        // .then(data => resolve(data))
        // .catch(err => reject(err));
        // })
        const response = await fetch(url,{
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }); // Response Object
            const responsedata = await response.json();
            return responsedata;

    }
    async put(url,data){
        // return new Promise((resolve,reject) => {
        //     fetch(url,{
        //     method: 'PUT',
        //     body: JSON.stringify(data),
        //     headers: {
        //         "Content-type": "application/json; charset=UTF-8"
        //     }
        // }) 
        
        // .then(response => response.json())
        // .then(data => resolve(data))
        // .catch(err => reject(err));
        // })

        const response = await fetch(url,{
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }); // Response Object
        const responsedata = await response.json();
        return responsedata;


    }
    async delete(url){
    //     return new Promise((resolve,reject) => {
    //         fetch('https://jsonplaceholder.typicode.com/albums/1', {
    //             method: 'DELETE' 
    //     }).then(response => resolve("Veri işlemi başarılı"))
    //     .catch(err => reject(err));
            
    // });

    
    const response = await fetch('https://jsonplaceholder.typicode.com/albums/1', {
            method: 'DELETE' 
    }); // Response Object
    // const data = await response.json();
    return "Veri silme işlemi başarılı.";
    
        
    }

}

const request = new Request();
// let albums;

// request.get("https://jsonplaceholder.typicode.com/albums")
// .then(albums => {
//     console.log(albums);
// })
// .catch(err => console.error(err));

// console.log(albums);

// request.post("https://jsonplaceholder.typicode.com/albums",{userId:1,title:"Thriller"})
// .then(newAlbum => console.log(newAlbum))
// .catch(err => console.error(err));


// request.put("https://jsonplaceholder.typicode.com/albums/1",{userId:10,title:"Tarkan Karma"})
// .then(album => console.log(album))
// .catch(err => console.log(err));


request.delete("https://jsonplaceholder.typicode.com/albums/1")
.then(album => console.log(album))
.catch(err => console.log(err));

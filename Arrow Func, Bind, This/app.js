// const person = {
//     age:25,

//     // tellAge: function(){
//     //     // this - Person
//     //     console.log(this);
//     //     console.log(this.age);
//     // }.bind(this)

// tellAge: () => {   // Bind gibi davranır
//     console.log(this);
//     console.log(this.age);
// }


//     // this - window


// }

// person.tellAge();


// Ajax Callback Http requests

class Request{
    constructor(){
        this.xhr = new XMLHttpRequest();
    }

    get(url,callback){

        this.xhr.open("GET",url); // Bağlantı açtık
        // const temp = this;
        this.xhr.onload = function(){
            if(this.xhr.status === 200){
                callback(null,this.xhr.responseText); // İsteğimiz bitti
            }
            else {
                // Hata durumuna
                callback("Get Request :Herhangi bir hata oluştu",null);
            }
        }.bind(this);

        this.xhr.send();
    }
    post(url,data,callback){
        this.xhr.open("POST",url);
        this.xhr.setRequestHeader("Content-type","application/json"); //JSON verisi

        this.xhr.onload = () => {
            // 201 Created the request has succeeded
            if(this.xhr.status === 201){
                // Başarılı
                callback(null,this.xhr.responseText);
            }
            else {
                callback("Post Request: Herhangi bir hata oluştu", null);
            }
        }

        this.xhr.send(JSON.stringify(data));

    }
    put(url,data,callback){
        this.xhr.open("PUT",url);
        this.xhr.setRequestHeader("Content-type","application/json"); //JSON verisi

        this.xhr.onload = () => {
            
            if(this.xhr.status === 200){
                // Başarılı
                callback(null,this.xhr.responseText);
            }
            else {
                callback("Put Request: Herhangi bir hata oluştu", null);
            }
        };
        

        this.xhr.send(JSON.stringify(data));
}
    delete(url,callback){

        this.xhr.open("DELETE",url); // Bağlantı açtık
        // const temp = this;
        this.xhr.onload = function(){
            if(this.xhr.status === 200){
            callback(null,"Veri silme işlemi başarılı."); // İsteğimiz bitti
            }
            else {
            // Hata durumuna
            callback("Delete Request :Herhangi bir hata oluştu",null);
            }
        }.bind(this);

    this.xhr.send();
}
}

const request = new Request();

// request.get("https://jsonplaceholder.typicode.com/albums",function(err,response){
//     if(err === null){
//         // Başarılı
//         console.log(response);
//     }
//     else {
//         // Hata
//         console.log(err);
//     }
// });

// request.post("https://jsonplaceholder.typicode.com/albums",{userId:2,title:"Thriller"},function(err,album){
//     if(err == null){
//         console.log(album);
//     }
//     else {
//         console.log(err);
        
//     }
// })
// request.put("https://jsonplaceholder.typicode.com/albums/10",{userId:143,title:"Tarkan Karma :D"},function(err,album){
//   if(err == null){
//          console.log(album);
//      }
//      else {
//         console.log(err);
        
//      }
//  })

 request.delete("https://jsonplaceholder.typicode.com/albums/10",function(err,response){
   if(err == null){
          console.log(response);
      }
      else {
         console.log(err);
        
      }
  })
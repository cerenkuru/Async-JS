// Callback Fonksiyonlar

// const langs = ["Python","Java","C++"];

// langs.forEach(function(lang){
//     console.log(lang);
// });

// document.getElementById("btn").addEventListener("click",function(){
    
// });


// function process1(callback){
//     setTimeout(function(){
//        console.log("process1");
//        callback();
//     },3000);
    
// };

// function process2(callback){
//     setTimeout(function(){
//        console.log("process2");
//     },2000);
    
// };


// process1(process2);

// // console.log("Hey") // Diğerlerinin çalışmasını beklemez


const langs = ["Python","Java","C++"];
function addLang(lang,callback){
    setTimeout(function(){
        langs.push(lang);
        console.log("Eklendi.")
        callback();
    },2000);

}

function gettAllLangs(){
    setTimeout(function(){
        langs.forEach(function(lang){
            console.log(lang);
        })
    },1000);
}

// addLang("Javascript");
// gettAllLangs(); // Asenkron bir durum oluşacak

addLang("Javascript",gettAllLangs);
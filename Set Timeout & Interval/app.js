// Set Timeout

setTimeout(function(){
    console.log("Hey");
},5000);

// Set Interval

let i = 0;
let value = setInterval(function(){
    i++;
    console.log("Sayı:", i)

},1000) // 1 saniye aralıklarla çalıştırır
document.getElementById("btn").addEventListener("click",function(){
    clearInterval(value);

});

// Clear Interval



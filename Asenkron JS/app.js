// Http Status
// 200 : OK
// 403 : Forbidden
// 404 : Not Found
// 505 : Internal Server Error


document.getElementById("btn").addEventListener("click",function(){

    // XMLHttpRequest

    const xhr = new XMLHttpRequest();

    // xhr.onprogress = function(){
    //     console.log("Process işleniyor");
    // }

    xhr.onload = function(){
        // console.log(this.readyState);
        if(this.status == 200){
            console.log(this.responseText);
            document.getElementById("ajax").textContent = this.responseText;
        }
    }
    // console.log(xhr);

    // xhr.onreadystatechange = function(){
    //    // console.log(this.readyState);
    //    // console.log(this.status);
    //    if(this.status == 200 && this.readyState == 4){
    //     // Response hazır
    //     console.log(this.responseText);
    //    }
    // }

    xhr.open("GET", "example.txt",true);

    xhr.send();



});
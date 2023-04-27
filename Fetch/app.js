function getTextFile(){

    fetch("example.txt")
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(err => console.error(err));

}
getTextFile();


function getJsonFile(){

    fetch("example.json")
    .then(response => response.json())
    .then(data1 => console.log(data1))
    .catch(err => console.error(err));

}
// getTextFile();
// getJsonFile();




// https://api.exchangerate.host/latest

function getExternalAPI(){
    fetch("https://api.exchangerate.host/latest")
    .then(response => response.json())
    .then(data => {
        console.log(data.rates.TRY);
    })
    .catch(err => console.error(err));
}

getExternalAPI();
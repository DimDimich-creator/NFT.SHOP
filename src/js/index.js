const url = "http://26.168.85.69:8000/api/get-nft?format=json";

let data;

fetch(url)
    .then((response) => response.json())
    .then((responseData) => {
        data = responseData;
        console.log(responseData);
    });

setTimeout(() => {
    console.log(data);
}, 259);
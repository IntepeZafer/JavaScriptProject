const getData = (resource , callback) => {
    const request = new XMLHttpRequest();
    request.open("GET" , resource)
    request.send();
    request.addEventListener("readystatechange" , () => {
        if(request.readyState === 4 && request.status === 200){ 
            const data = JSON.parse(request.responseText);
            callback(undefined , data)
        }else if(request.readyState !== 4 && request.status !== 200){
            callback("Bağlantı Başarısız" , undefined)
        }
    });
};
getData("./example.js" , (err , data) => {
    console.log(data)
})
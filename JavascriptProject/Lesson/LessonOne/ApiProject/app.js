const getData = () => {
    const request = new XMLHttpRequest();
    request.open("GET" , "https://jsonplaceholder.cypress.io/todos/1")
    request.send();
    request.addEventListener("readystatechange" , () => {
        if(request.readyState === 4 && request.status === 200){ 
            console.log(JSON.parse(request.responseText));
        }else if(request.readyState !== 4 && request.status !== 200){
            console.log("Hatalı İşlem Yapıldı")
        }
    });
};
getData();

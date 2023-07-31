const getTodos = () => {
    return new Promise((resolve , reject) => {
        const request = new XMLHttpRequest();
        request.open("GET" , "./example.js");
        request.send();
        request.addEventListener("readystatechange" , () => {
            if(request.readyState === 4 && request.status === 200){
                resolve(JSON.parse(request.responseText));
            }else if(request.readyState !== 4 && request.status !== 200){
                reject("Hatalı Bir İşlem Yapıldı");
            };
        });
    });
};
getTodos("./example.js")
.then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err)
})
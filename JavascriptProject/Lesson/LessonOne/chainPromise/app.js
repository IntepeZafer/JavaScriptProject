const TodoApp = (data) => {
    return new Promise((resolve , reject) => {
        const request = new XMLHttpRequest();
        request.open("GET" , data);
        request.send();
        request.addEventListener("readystatechange" , () => {
            if(request.readyState === 4 && request.status === 200){
                resolve(JSON.parse(request.responseText));
            }else if(request.readyState !== 4 && request.status !== 200){
                reject("Data Is Not Resolve");
            };
        });
    });
};
TodoApp("./example.json")
.then(data => {
    console.log(data)
    return TodoApp("./example2.json");
}).then(data => {
    console.log(data);
}).catch(err => {
    console.log(err)
});
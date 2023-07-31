const todoApp = async (data) => {
    const response = await fetch(data);
    if(response.status === 200){
        return response.json();
    }else if(response.status !== 200){
        throw new Error("Hatalı Token İşlemi");
    }
}
todoApp("./example.json")
.then((data) => {
    console.log(data);
    return todoApp("./example2.json");
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err)
})
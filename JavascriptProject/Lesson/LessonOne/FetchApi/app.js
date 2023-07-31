fetch("./example.json")
.then(data => {
   return data.json();
}).then(data => {
    console.log(data);
    return fetch("./example2.json");
}).then(data => {
    return data.json();
}).then(data => {
    console.log(data)
})
.catch(err => {
    console.log(err)
})
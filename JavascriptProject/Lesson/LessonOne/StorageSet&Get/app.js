async function apiKey(data){
    const response = await fetch(data);
    const json = await response.json();
    localStorage.setItem("name" , JSON.stringify(json))
    console.log(localStorage.getItem("name"))
}
apiKey("./example.json");
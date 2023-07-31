// ! Element Selected
const button = document.querySelector("button");
const text = document.querySelector(".text");
// ? api Use
let api_KEY = "J1GsTG8tO1gHJRiJT0/vEw==RZkTtgJ16Ogv3mQe";
let api_URL = "https://api.api-ninjas.com/v1/jokes?limit=1"
const options = {
    method : "GET",
    headers : {
        'X-Api-Key': api_KEY
    }
}
async function getJoke(){
    try{
        text.textContent = "Updating...";
        button.textContent = "Loading...";
        button.disabled = true;
        const response = await fetch(api_URL , options)
        .then((result) => {
            const response = result.json();
            return response;
        }).then((response) => {
            button.disabled = false;
            button.textContent = "Tell Me A Joke";
            text.textContent = response[0].joke;
        })
    }catch(error){
        text.textContent = error
    }
    
   
}
button.addEventListener("click" , getJoke);
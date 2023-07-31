// ! Elements Selected
const wordInput = document.getElementById("wordInput");
const button = document.querySelector("button")
const elements = document.querySelector(".elements");
const word_value = document.querySelector(".word_value")
const word_value1 = document.querySelector(".word_value1")
const audio = document.getElementById("audio");
// ! btn => click event
async function fetchApi(){
   const result =  await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordInput.value}`)
   .then((response) => response.json())
   .catch((err) => "Api Key Is Not Working");
   if(result.title){
    elements.classList.remove("show")
   }else{
    console.log(result)
    word_value.textContent = result[0].word
    word_value1.textContent = result[0].meanings[0].definitions[0].definition;
    audio.src = result[0].phonetics[0].audio
    elements.classList.add("show")
   }
}
button.addEventListener("click" , (event) => {
    fetchApi();
    event.preventDefault();
})
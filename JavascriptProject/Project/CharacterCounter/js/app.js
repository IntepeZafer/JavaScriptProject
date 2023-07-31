const textarea = document.querySelector("textarea");
const totalCounter = document.querySelector(".totalCounter");
const remainingCounterCharacter = document.querySelector(".remainingCounterCharacter");

textarea.addEventListener("keyup" , updateCounter);

function updateCounter(){
    totalCounter.textContent = textarea.value.length;
    remainingCounterCharacter.textContent = textarea.getAttribute("maxlength") - textarea.value.length;
}
updateCounter();
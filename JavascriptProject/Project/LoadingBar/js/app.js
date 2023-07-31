const counterDiv =  document.querySelector(".counter");
const loadingBarFrontDiv = document.querySelector(".loadingBarFront")
let number = 0;
document.addEventListener("DOMContentLoaded" , () => {
    updateNumber();
    function updateNumber(){
        counterDiv.textContent = number + "%";
        loadingBarFrontDiv.style.width = number + "%";
        number++;
        if(number < 101){
            setTimeout(updateNumber , 30);
        }
    }
})
const addInput = document.querySelector(".add");
const listElements = document.querySelector(".listElements")
const pElement = document.querySelector("p");
const iTag = document.querySelector("i");

const generateInputs = (togle) => {
    if(togle === ""){
        alert("Lütfen Boş Değer Girmeyiniz.")
    }else{
        pElement.remove();
        listElements.innerHTML += `<li>${togle}<span><i class="fa-solid fa-trash-can delete"></i></span></li>`;
        addInput.reset();
    }
}
addInput.addEventListener("submit" , (event) => {
    const togle = addInput.add.value.trim();
    generateInputs(togle);
    event.preventDefault();
});
listElements.addEventListener("click" , (event) => {
    if(event.target.classList.contains("delete")){
        event.target.parentElement.parentElement.remove();
    }
});


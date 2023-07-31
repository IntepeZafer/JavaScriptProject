const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const imageContainer = document.querySelector(".imageContainer");
const images = document.querySelectorAll("img")
let currentImage = 1;
let timeouth;

next.addEventListener("click" , (event) => {
    currentImage++;
    if(currentImage > images.length){
        currentImage = 1;
    }
    imageContainer.style.transform = `translateX(-${(currentImage-1)*700}px)`;
    event.preventDefault();
})
prev.addEventListener("click" , (event) => {
    currentImage--;
    if(currentImage > images.length){
        currentImage = 1;
    }else if(currentImage < 1){
        currentImage = images.length;
    }
    imageContainer.style.transform = `translateX(-${(currentImage-1)*700}px)`;
    event.preventDefault();
})
function uploadSlider(){
    currentImage++;
    if(currentImage > images.length){
        currentImage = 1;
    }
    imageContainer.style.transform = `translateX(-${(currentImage-1)*700}px)`;
    setTimeout(() =>{
        currentImage++;
        uploadSlider();
    } , 2000)
}
uploadSlider();

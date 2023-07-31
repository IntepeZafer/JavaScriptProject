// ! Elements Select
const number = document.querySelector(".number");
const fahrenait = document.querySelector(".fahrenait");
const kelvin = document.querySelector(".kelvin");

// calculateTemp Functions Use
function calculateTemp(event){
    const degrade = Number(event.target.value);
    switch(event.target.name){
        case "number":
            kelvin.value = (degrade + 273.32).toFixed();
            fahrenait.value = (degrade * 1.8 + 32).toFixed();
            break;
        case "fahrenait":
            number.value = ((degrade - 32) / 1.8).toFixed();
            kelvin.value = ((degrade - 32) / 1.8 + 273.32).toFixed();
            break;
        case "kelvin":
            number.value = ((degrade - 32) / 1.8).toFixed();
            kelvin.value = ((degrade - 32) / 1.8 + 273.32).toFixed();
            break;
        default:
            console.log("Seçili Eylem Yok");
            break;

    }
}
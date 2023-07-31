// ! Elements Selected
const currentFirst = document.getElementById("currentFirst");
const currentSecond = document.getElementById("currentSecond");
const count = document.getElementById("count");
const equel = document.getElementById("equel");
const exchangeRate = document.getElementById("exchangeRate");
// ! Api Request
updateRate();
 function updateRate(){
    fetch(`https://v6.exchangerate-api.com/v6/59ab74eff728f60883a108f8/latest/${currentFirst.value}`)
    .then((response) => {
        response.json();
    }).then((response) => {
        const rate = response.conversion_rates[currentSecond.value];
        exchangeRate.textContent = `1 ${currentFirst.value} = ${rate} ${currentSecond.value}`;
        equel.textContent = (count.value * rate).toFixed(2);
    }).catch((err) => {
        console.log(err);
    });
};
// ! EventListenner
currentFirst.addEventListener("change" , () => {
    updateRate();
});
currentSecond.addEventListener("change" , () => {
    updateRate();
});
count.addEventListener("input" , () => {
    updateRate();
});
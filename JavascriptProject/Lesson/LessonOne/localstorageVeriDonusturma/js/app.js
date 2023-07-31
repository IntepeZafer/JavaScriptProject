const data =[
    {"name" : "Zafer" , "surname" : "İntepe" , "jobs" : "Front-end Developer"},
    {"name" : "Berkecan" , "surname" : "İntepe" , "jobs" : "Industrial Desinger"},
    {"name" : "Beren" , "surname" : "İntepe" , "jobs" : "Mode Editor"}
];
localStorage.setItem("data" , JSON.stringify(data))
const storedData = localStorage.getItem("data")
console.log(JSON.parse(storedData))

let count = 0
function clicked() {

    count += 1

    document.getElementById("count-el").innerText = count;
}

function save() {
    let countStr = count + " - " 
    document.getElementById("save-el").textContent += countStr
    document.getElementById("count-el").textContent = 0
    count = 0
}

let nam = "Nilesh"
let greetings = "Welcome"

let welcomeEl = greetings + " " + nam 
wel = document.getElementById('welcome-el')
wel.textContent = welcomeEl;

wel.textContent += "👋"


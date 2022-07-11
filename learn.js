
let count = 0
function clicked() {

    count = count + 1

    document.getElementById("count-el").innerText = count;
}

function clicked2() {
    count = count - 1
    
    document.getElementById("count-el").innerText = count;
}

function reset() {
    count = 0
    document.getElementById("count-el").innerText = count;
}
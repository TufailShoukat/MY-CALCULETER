function appendToDisplay(e) {
    document.getElementById('display').innerText += e;

}

function clearDisplay() {
    document.getElementById('display').innerText = ' '

}

function calculate() {
    var a = document.getElementById('display')
    var result = eval(display.innerText);
    display.innerText = result;

}



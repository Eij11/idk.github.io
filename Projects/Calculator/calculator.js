function add() {
    var num1 = parseFloat(document.getElementById("first-num").value);
    var num2 = parseFloat(document.getElementById("second-num").value);
    var result = num1 + num2;
    document.getElementById("results").value = result;
}

function subtract() {
    var num1 = parseFloat(document.getElementById("first-num").value);
    var num2 = parseFloat(document.getElementById("second-num").value);
    var result = num1 - num2;
    document.getElementById("results").value = result;
}

function multiply() {
    var num1 = parseFloat(document.getElementById("first-num").value);
    var num2 = parseFloat(document.getElementById("second-num").value);
    var result = num1 * num2;
    document.getElementById("results").value = result;
}

function divide() {
    var num1 = parseFloat(document.getElementById("first-num").value);
    var num2 = parseFloat(document.getElementById("second-num").value);
    var result = num1 / num2;
    document.getElementById("results").value = result;
}

function clearFields() {
    document.getElementById("first-num").value = "";
    document.getElementById("second-num").value = "";
    document.getElementById("results").value = "";
}
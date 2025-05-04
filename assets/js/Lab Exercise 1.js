function Quotient() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var quotient = num1 / num2;
    document.getElementById("result").innerText = "Quotient: " + quotient;
}
function Product() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var product = num1 * num2;
    document.getElementById("result").innerText = "Product: " + product;
}
function Difference() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var difference = num1 - num2;
    document.getElementById("result").innerText = "Difference: " + difference;
}
function Sum() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var sum = num1 + num2;
    document.getElementById("result").innerText = "Sum: " + sum;
}
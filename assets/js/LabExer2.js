function getResult() {
    var result = document.getElementById("number").value;
    var count = 0;
    var i;
    if (result % 2 == 0 ) {
        document.getElementById("result1").innerHTML = " THE NUMBER IS EVEN";
    } else {
        document.getElementById("result1").innerHTML = "THE NUMBER IS ODD";
    }
    
    if (result <=1 ) {
        document.getElementById("result2").innerHTML = "INVALID";
    } else {
        for (i = 0; i <= result; i++) {
            if (result % i == 0) {
                count++;
            }
        }
    if (count == 2) 
        document.getElementById("result2").innerHTML = "PRIME";
    if (count > 2)
        document.getElementById("result2").innerHTML = "COMPOSITE";
}
}
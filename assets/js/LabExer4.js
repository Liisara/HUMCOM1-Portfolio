var result1 = prompt("Enter the number of ROWS: ");
var result2 = prompt("Enter the number of COLUMS: ");

var i; 
var j;

function table() {
    document.write("<table>")
    for (i = 1; i <= result1; i++) {
        document.write("<tr>")
        for (j = 1; j <= result2; j++){
                document.write("<td>" + i*j + "</td>")
        }
        document.write("</tr>")
    }
    document.write("</table>")
}

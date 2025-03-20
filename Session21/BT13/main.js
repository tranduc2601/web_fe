let n = 7;
document.writeln("<table><tr>");
// a
document.writeln("<td>a.&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<br>"); 
for (let i = n; i > 0; i--) {
    document.writeln("*".repeat(i) + "<br>");
}
document.writeln("</td>");
// b
document.writeln("<td>b.&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<br>"); 
for (let i = 1; i <= n; i++) {
    document.writeln("*".repeat(i) + "<br>");
}
document.writeln("</td>");

// c
document.writeln("<td>c.&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<br>"); 
for (let i = 1; i <= n; i++) {
    document.writeln("&nbsp;".repeat((n - i) * 2) + "*".repeat(i) + "<br>");
}
document.writeln("</td>");

// d
document.writeln("<td>d.&emsp;&emsp;&emsp;&emsp;&emsp;<br>"); 
for (let i = n; i > 0; i--) {
    document.writeln("&nbsp;".repeat((n - i) * 2) + "*".repeat(i) + "<br>");
}
document.writeln("</td>");

document.writeln("</tr></table>");

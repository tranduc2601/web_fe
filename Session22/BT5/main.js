// in ra từ 1--->100
for (let i = 1; i <= 100; i++) {
    // bội của 3 và 5 thịf sẽ in ra FizBuz
    if (i % 3 === 0 && i % 5 === 0) {
        document.writeln("FizzBuzz<br>");
    // bội cảu 3 thì in ra Fiz    
    } else if (i % 3 === 0) {
        document.writeln("Fizz<br>");
    // bội của 5 thì in ra Buzz
    } else if (i % 5 === 0) {
        document.writeln("Buzz<br>");
    // còn lại thì in ra số đó
    } else {
        document.writeln(i + "<br>");
    }
}

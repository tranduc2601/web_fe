let username = prompt("Enter your name:");
if (username == "ADMIN") {
    // admin--->pass
    let password = prompt("Enter your password:");
    if (password == "TheMaster") {
        alert("Welcome");
    } else if (password == null) {
        alert("Cancelled");
    } else {
        alert("Wrong password");
    }
} else if (username == null) {
    //null--->cancel
    alert("Cancelled");
} else {
    // other--->I Don't know you
    alert("I Don’t know you");
}

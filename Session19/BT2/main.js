const input = prompt("Nhập một ký tự:");
if ((input >= 'a' && input <= 'z') || (input >= 'A' && input <= 'Z')) {
    console.log(`kí tự ${input} là một chữ cái.`);
    alert(`kí tự ${input} là một chữ cái.`);
} else {
    console.log(`kí tự ${input} không phải là một chữ cái.`);
    alert(`kí tự ${input} không phải là một chữ cái.`);
}


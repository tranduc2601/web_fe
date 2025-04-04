function isStrongPassword(password) {
    if (typeof password !== "string") return false;
    
    const hasMinLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /[0-9]/.test(password);

    return hasMinLength && hasUpperCase && hasLowerCase && hasDigit;
}
alert(isStrongPassword("Abc123!@"));
alert(isStrongPassword("weakpass"));

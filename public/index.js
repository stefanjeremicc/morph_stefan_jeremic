// function password validation 
function validatePass(password) {
  let validateRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*])/;
  let checkDigitRegex = /\d/;

  // test password strength
  if (validateRegex.test(password) && password.length > 5) {
    if (validateRegex.test(password) && password.length >= 8 && checkDigitRegex.test(password)) {
      return 'Strong';
    } else {
      return 'Medium';
    }
  }
  return 'Week';
}
console.log(validatePass(''));



// check opening parentheses function
const checkOpenParen = stack => {
  return stack[stack.length - 1];
}

// parentheses validation function
const isValid = str => {
  let stack = [];

  // iterate through every char of the string
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);

    // if the char is an opening parenthesis '(' push it to the stack array 
    if(char === '(') {
      stack.push(char);
    } else if(char === ')') {
      // if the char is a closing parenthesis ')' check if it has a matching opening parentheses '('
      if (checkOpenParen(stack) === '(') {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  // check if the stack is empty
  return stack.length === 0;
}

console.log(isValid("(Welcome (to (Morph)))"));
console.log(isValid("Welcome (to(the (Morph)"));
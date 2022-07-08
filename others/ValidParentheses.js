// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

const isValid2 = (s) => {
  const stack = [];
  const map = {
    "(": ")",
    "[": "]",
    "{": "}"
  };
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      stack.push(s[i]);
    } else if (map[stack.pop()] !== s[i]) {
      return false;
    }
  }
  return stack.length === 0;
};

const isValid = (s) => {
  if (!s) return false;
  const validate = (array, value, index) => {
    return (
      array[array.length - index - 1] !== value && array[index + 1] !== value
    );
  };

  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "(":
        return !validate(s, ")", i);
      case "[":
        return !validate(s, "]", i);
      case "{":
        return !validate(s, "}", i);
      default:
        break;
    }
  }

  return true;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));
console.log(isValid(""));
console.log(isValid("[{[]}]"));

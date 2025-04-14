// 1. jsBasicsQuiz – Fundamental concepts and general knowledge
export const jsBasicsQuiz = [
  {
    question: "When was JavaScript first released?",
    options: ["2005", "1995", "2000", "1996"],
    answer: "1995"
  },
  {
    question: "What type of language is JavaScript?",
    options: ["Compiled", "Markup", "Interpreted", "Database"],
    answer: "Interpreted"
  },
  {
    question: "On which platforms can JavaScript be used?",
    options: ["Servers", "All of the above", "Web browsers", "Desktop applications"],
    answer: "All of the above"
  },
  {
    question: "What is the correct way to include JavaScript in HTML?",
    options: ["<link rel='script' href='app.js'>", "<script src='app.js'></script>", "<style src='app.js'></style>", "<js src='app.js'></js>"],
    answer: "<script src='app.js'></script>"
  },
  {
    question: "Is JavaScript a programming language?",
    options: ["Neither", "Yes", "Only a scripting language", "No"],
    answer: "Yes"
  },
  {
    question: "JavaScript does not control which of the following?",
    options: ["User interfaces", "Dynamic content", "Server hardware", "Web pages"],
    answer: "Server hardware"
  },
  {
    question: "JavaScript is never compiled:",
    options: ["Depends", "False", "True", "Not applicable"],
    answer: "False"
  },
  {
    question: "JavaScript is a ______ language.",
    options: ["Styling", "Programming", "Markup", "Sculpting"],
    answer: "Programming"
  },
  {
    question: "The primary use of JavaScript is:",
    options: ["System programming", "Web development", "Application development", "Database management"],
    answer: "Web development"
  },
  {
    question: "JavaScript is considered a ____ level language.",
    options: ["Low-level", "High-level", "Assembly", "Machine-level"],
    answer: "High-level"
  }
];


// 2. jsVariablesScopeQuiz – Variable declarations, scope, and related concepts
export const jsVariablesScopeQuiz = [
  {
    question: "Which keywords can be used to declare a variable in JavaScript?",
    options: ["const", "var", "All of the above", "let"],
    answer: "All of the above"
  },
  {
    question: "Which keyword does NOT create block scope?",
    options: ["let", "Both let and const", "var", "const"],
    answer: "var"
  },
  {
    question: "What does 'scope' refer to?",
    options: ["Software version", "The region in the code where a variable is accessible", "The file name", "The server location"],
    answer: "The region in the code where a variable is accessible"
  },
  {
    question: "Where is a global variable accessible?",
    options: ["Only inside a function", "Everywhere", "Only in a module", "Only in a block"],
    answer: "Everywhere"
  },
  {
    question: "Block scope applies only to which keywords?",
    options: ["class", "var", "let and const", "function"],
    answer: "let and const"
  },
  {
    question: "What is hoisting in JavaScript?",
    options: ["Code is reset", "Variable and function declarations are moved to the top of their scope", "Event handling occurs", "Data is stored"],
    answer: "Variable and function declarations are moved to the top of their scope"
  },
  {
    question: "Where is a function-scoped variable accessible?",
    options: ["Only within the function", "Throughout the script", "In the HTML file", "Only in the global scope"],
    answer: "Only within the function"
  },
  {
    question: "What is variable shadowing?",
    options: ["Copying a variable", "Having the same variable name in different scopes", "Encrypting a variable", "Deleting a variable"],
    answer: "Having the same variable name in different scopes"
  },
  {
    question: "Is a variable declared with const mutable?",
    options: ["Depends on the situation", "Only for objects", "No", "Yes"],
    answer: "No"
  },
  {
    question: "Are variables declared without initialization default to undefined?",
    options: ["Only with let", "Yes", "No", "Only with var"],
    answer: "Yes"
  }
];


// 3. jsFunctionsQuiz – Function declarations, expressions, and arrow functions
export const jsFunctionsQuiz = [
  {
    question: "How do you declare a function in JavaScript?",
    options: ["var myFunc = () => {}", "Both of the above", "function myFunc() {}", "None of the above"],
    answer: "Both of the above"
  },
  {
    question: "What is the correct example of an Immediately Invoked Function Expression (IIFE)?",
    options: ["(()=>{})()", "(function(){})();", "myFunc(){}();", "function(){})();"],
    answer: "(function(){})();"
  },
  {
    question: "What is the main characteristic of an arrow function?",
    options: ["None of the above", "It has a different 'this' binding", "It behaves the same as a regular function", "It is a circular function"],
    answer: "It has a different 'this' binding"
  },
  {
    question: "When are default parameters used in a function?",
    options: ["Only in arrow functions", "When an argument is not provided", "Never", "Always"],
    answer: "When an argument is not provided"
  },
  {
    question: "What is the main difference between function expressions and function declarations?",
    options: ["There is no difference", "Syntax", "Hoisting behavior", "It is not noticeable"],
    answer: "Hoisting behavior"
  },
  {
    question: "What is a higher-order function?",
    options: ["A function that only works with strings", "A function that takes another function as an argument", "A function that multiplies numbers", "A faulty function"],
    answer: "A function that takes another function as an argument"
  },
  {
    question: "In which case is a callback function mostly used?",
    options: ["Within loops", "For asynchronous operations", "Inside classes", "For synchronous operations"],
    answer: "For asynchronous operations"
  },
  {
    question: "How is 'this' determined in an arrow function?",
    options: ["Based on the lexical context", "Undefined", "Dynamically based on call-site", "Always the window object"],
    answer: "Based on the lexical context"
  },
  {
    question: "How do you declare a rest parameter in a function?",
    options: ["rest args", "...args", "args rest", "args..."],
    answer: "...args"
  },
  {
    question: "What does function currying mean?",
    options: ["Returning a function", "Splitting a function into a series of functions based on arguments", "Using the same function repeatedly", "Combining multiple functions into one"],
    answer: "Splitting a function into a series of functions based on arguments"
  }
];


// 4. jsES6Quiz – New features in ECMAScript 6 and beyond
export const jsES6Quiz = [
  {
    question: "Which of the following keywords is new in ES6?",
    options: ["var", "const", "Both let and const", "let"],
    answer: "Both let and const"
  },
  {
    question: "Template literals are enclosed within which characters?",
    options: ["''", "``", "%%", "\"\""],
    answer: "``"
  },
  {
    question: "Destructuring makes it easier to:",
    options: ["Loop through arrays", "Extract values from objects", "Reset values", "Declare variables"],
    answer: "Extract values from objects"
  },
  {
    question: "What is the correct syntax for the spread operator?",
    options: ["+++", "///", "&&&", "..."],
    answer: "..."
  },
  {
    question: "Which keyword is omitted in the concise syntax of an arrow function?",
    options: ["=>", "return", "Both function and return", "function"],
    answer: "function"
  },
  {
    question: "What is the purpose of using import/export in ES6?",
    options: ["Memory storage", "Module management", "DOM manipulation", "Loading stylesheets"],
    answer: "Module management"
  },
  {
    question: "How do you declare a class in ES6?",
    options: ["MyClass() => {}", "class MyClass {}", "var MyClass = {}", "function MyClass() {}"],
    answer: "class MyClass {}"
  },
  {
    question: "How can you set a default parameter value in a function?",
    options: ["function f(x : 10) {}", "function f(x default=10) {}", "function f(x = '10') {}", "function f(x = 10) {}"],
    answer: "function f(x = 10) {}"
  },
  {
    question: "What is the difference between an Iterator and a Generator?",
    options: ["There is no difference", "A Generator is iterable, while an Iterator is a function", "An Iterator is iterable, while a Generator is a function that produces an iterator", "They are the same"],
    answer: "An Iterator is iterable, while a Generator is a function that produces an iterator"
  },
  {
    question: "Which ES6 feature is primarily used for better module management?",
    options: ["AJAX", "Callbacks", "Modules", "Event Loop"],
    answer: "Modules"
  }
];


// 5. jsAsyncQuiz – Handling asynchronous operations: Promises, async/await, Callbacks
export const jsAsyncQuiz = [
  {
    question: "What is a Promise in JavaScript?",
    options: ["A loop", "An event", "A synchronous operation", "An asynchronous operation"],
    answer: "An asynchronous operation"
  },
  {
    question: "What is the primary purpose of an async function?",
    options: ["To create new variables", "For DOM manipulation", "To convert synchronous code to asynchronous", "To speed up code execution"],
    answer: "To convert synchronous code to asynchronous"
  },
  {
    question: "How does the 'await' keyword work?",
    options: ["It resets the code", "It returns the result immediately", "It does nothing", "It pauses execution until the Promise is resolved"],
    answer: "It pauses execution until the Promise is resolved"
  },
  {
    question: "What is a callback function?",
    options: ["Variable incrementation", "A function passed as an argument to another function", "DOM loading", "A newly declared function"],
    answer: "A function passed as an argument to another function"
  },
  {
    question: "What is the benefit of promise chaining?",
    options: ["For loop processing", "To execute multiple asynchronous operations sequentially", "For DOM updates", "To speed up synchronous operations"],
    answer: "To execute multiple asynchronous operations sequentially"
  },
  {
    question: "Which method is used for error handling in Promises?",
    options: ["finally()", "catch()", "error()", "try()"],
    answer: "catch()"
  },
  {
    question: "Asynchronous programming is also known as:",
    options: ["Synchronous", "Non-blocking", "Blocking", "Threaded"],
    answer: "Non-blocking"
  },
  {
    question: "What is the role of the event loop in JavaScript?",
    options: ["To update the DOM", "To execute synchronous operations", "To clear the call stack", "To coordinate the call stack and callback queue"],
    answer: "To coordinate the call stack and callback queue"
  },
  {
    question: "What is the purpose of the setTimeout() function?",
    options: ["To modify the DOM", "To declare variables", "To execute code immediately", "To execute code after a specified time interval"],
    answer: "To execute code after a specified time interval"
  },
  {
    question: "What are the three states of a Promise?",
    options: ["Initialized, In Progress, Completed", "Pending, Fulfilled, Rejected", "Started, Running, Ended", "None of these"],
    answer: "Pending, Fulfilled, Rejected"
  }
];


// 6. jsDomEventsQuiz – Working with the Document Object Model and event handling
export const jsDomEventsQuiz = [
  {
    question: "What does DOM stand for?",
    options: ["Desktop Object Model", "Digital Object Model", "Document Object Model", "Data Object Model"],
    answer: "Document Object Model"
  },
  {
    question: "How can you select an HTML element using JavaScript?",
    options: ["document.querySelector()", "None of the above", "document.getElementById()", "Both of the above"],
    answer: "Both of the above"
  },
  {
    question: "What is event bubbling?",
    options: ["Resetting an event", "The process where an event propagates upward through the DOM", "Increasing the event speed", "Stopping an event"],
    answer: "The process where an event propagates upward through the DOM"
  },
  {
    question: "What does event capturing mean?",
    options: ["An event starts from the target and goes outward", "None of the above", "An event is captured from the ancestor nodes before reaching the target", "The event is stopped"],
    answer: "An event is captured from the ancestor nodes before reaching the target"
  },
  {
    question: "What is the correct syntax for addEventListener()?",
    options: ["addEventListener(element, 'click', function() {})", "element.addListener('click', function() {})", "element.addEventListener('click', function() {})", "element.onClick('click', function() {})"],
    answer: "element.addEventListener('click', function() {})"
  },
  {
    question: "What is event delegation?",
    options: ["Attaching individual event handlers to each element", "Attaching a single event handler to a parent element to manage events for its children", "Disabling events", "None of the above"],
    answer: "Attaching a single event handler to a parent element to manage events for its children"
  },
  {
    question: "What does the DOMContentLoaded event indicate?",
    options: ["JavaScript has loaded first", "None of the above", "CSS files have been loaded", "The HTML document has been fully loaded"],
    answer: "The HTML document has been fully loaded"
  },
  {
    question: "Which event is best suited for UI interactions?",
    options: ["resize", "scroll", "click", "load"],
    answer: "click"
  },
  {
    question: "What is the purpose of Event.preventDefault()?",
    options: ["To log the event", "To delete the event", "To trigger the event", "To prevent the default action associated with the event"],
    answer: "To prevent the default action associated with the event"
  },
  {
    question: "What does the stopPropagation() method do?",
    options: ["Starts an event", "Resets event data", "None of the above", "Stops the event from bubbling up"],
    answer: "Stops the event from bubbling up"
  }
];


// 7. jsOperatorsQuiz – Operators, ternary expressions, and type comparisons
export const jsOperatorsQuiz = [
  {
    question: "Which operator checks both type and value?",
    options: ["!=", "==", "===", "="],
    answer: "==="
  },
  {
    question: "Which operator indicates inequality?",
    options: ["not =", "!==", "All of the above", "!="],
    answer: "!=="
  },
  {
    question: "What is the correct syntax for the ternary operator?",
    options: ["expr1 ? condition : expr2", "condition ? : expr2", "condition ? expr1 : expr2", "condition : expr1 ? expr2"],
    answer: "condition ? expr1 : expr2"
  },
  {
    question: "Which operator represents Logical AND?",
    options: ["!!", "##", "&&", "||"],
    answer: "&&"
  },
  {
    question: "Which operator represents Logical OR?",
    options: ["&&", "%%", "||", "!!"],
    answer: "||"
  },
  {
    question: "Which of the following is an example of the increment operator?",
    options: ["++i", "i += 1", "All of the above", "i++"],
    answer: "All of the above"
  },
  {
    question: "Which of the following is an example of the decrement operator?",
    options: ["i--", "All of the above", "i -= 1", "--i"],
    answer: "All of the above"
  },
  {
    question: "Which is the Bitwise AND operator?",
    options: ["&", "|", "&&", "||"],
    answer: "&"
  },
  {
    question: "What does the equality operator '==' check?",
    options: ["It checks both value and type", "None of the above", "It checks value only", "It checks type only"],
    answer: "It checks value only"
  },
  {
    question: "What does the typeof operator determine?",
    options: ["None of the above", "The value of a variable", "The name of a variable", "The data type of a variable"],
    answer: "The data type of a variable"
  }
];


// 8. jsObjectsArraysQuiz – Working with objects and arrays
export const jsObjectsArraysQuiz = [
  {
    question: "What is an object literal?",
    options: ["A list of strings", "A collection of key-value pairs", "Similar to an array", "Like a set"],
    answer: "A collection of key-value pairs"
  },
  {
    question: "How do you access a value from an object?",
    options: ["Using only bracket notation", "There's no way", "Using both dot notation and bracket notation", "Using only dot notation"],
    answer: "Using both dot notation and bracket notation"
  },
  {
    question: "What does Array.push() do?",
    options: ["Removes an item", "Adds a new item to the array", "Updates an item", "Searches for an item"],
    answer: "Adds a new item to the array"
  },
  {
    question: "What does Array.pop() do?",
    options: ["Adds an item", "Removes the first item", "Removes the last item from the array", "Removes an item from the middle"],
    answer: "Removes the last item from the array"
  },
  {
    question: "What does the forEach() method do?",
    options: ["Creates a new array", "Executes a provided function on each element of the array", "Filters the array", "Sorts the array"],
    answer: "Executes a provided function on each element of the array"
  },
  {
    question: "What is the usage of the map() method?",
    options: ["Updates the array", "Removes all elements", "Filters the array", "Applies a function on every element and returns a new array"],
    answer: "Applies a function on every element and returns a new array"
  },
  {
    question: "What does Object.keys() do?",
    options: ["Duplicates an object", "Returns an array of an object's keys", "Does nothing", "Returns the object's values"],
    answer: "Returns an array of an object's keys"
  },
  {
    question: "What is the purpose of Array.filter()?",
    options: ["To create an object", "To extract elements that satisfy a certain condition", "To add up all elements", "To remove the last element"],
    answer: "To extract elements that satisfy a certain condition"
  },
  {
    question: "What data types can be destructured?",
    options: ["Only arrays", "Both objects and arrays", "None", "Only objects"],
    answer: "Both objects and arrays"
  },
  {
    question: "What can you do with the Spread operator?",
    options: ["Filter arrays", "Delete an object", "Clone and merge objects/arrays", "None of the above"],
    answer: "Clone and merge objects/arrays"
  }
];


// 9. jsAdvancedQuiz – Topics like closures, prototypes, and more
export const jsAdvancedQuiz = [
  {
    question: "What is a closure in JavaScript?",
    options: ["Function hoisting", "A function defined inside another function that accesses the outer function's variables", "A type of object", "An asynchronous operation"],
    answer: "A function defined inside another function that accesses the outer function's variables"
  },
  {
    question: "What does prototypal inheritance achieve?",
    options: ["Creates new functions", "Allows objects to inherit properties and methods from their prototype", "Updates the DOM", "Resets variables"],
    answer: "Allows objects to inherit properties and methods from their prototype"
  },
  {
    question: "Why is closure often used in an IIFE?",
    options: ["To store data", "To reduce the number of variables", "To protect data from the external scope", "To speed up code execution"],
    answer: "To protect data from the external scope"
  },
  {
    question: "What does currying do?",
    options: ["Filters data", "Transforms a function into a series of functions based on its arguments", "Combines many functions into one", "None of the above"],
    answer: "Transforms a function into a series of functions based on its arguments"
  },
  {
    question: "What is the benefit of function memoization?",
    options: ["Handles events", "Creates new functions", "Reuses the results of expensive function calls", "Enables synchronous operation"],
    answer: "Reuses the results of expensive function calls"
  },
  {
    question: "What is the functionality of call(), apply(), and bind()?",
    options: ["They handle asynchronous operations", "None of the above", "They control the 'this' context and function invocation", "They declare variables"],
    answer: "They control the 'this' context and function invocation"
  },
  {
    question: "What is the purpose of 'use strict'?",
    options: ["It updates the DOM", "It deletes variables", "It enforces stricter parsing and error handling in your code", "It speeds up code execution"],
    answer: "It enforces stricter parsing and error handling in your code"
  },
  {
    question: "What is the relationship between the event loop and the call stack?",
    options: ["There is no relationship", "They regulate each other", "The event loop outsources the call stack", "The call stack is derived from the event loop"],
    answer: "They regulate each other"
  },
  {
    question: "How does garbage collection work in JavaScript?",
    options: ["It calls functions", "It updates data", "It frees up memory that is no longer needed", "It stores data"],
    answer: "It frees up memory that is no longer needed"
  },
  {
    question: "What is essentially done in the Decorator pattern?",
    options: ["Creates new functions", "Encrypts code", "Resets variables", "Dynamically modifies the behavior of a function or object"],
    answer: "Dynamically modifies the behavior of a function or object"
  }
];


// 10. jsInterviewQuiz – Intermediate and advanced level questions for interviews
export const jsInterviewQuiz = [
  {
    question: "Explain the event loop in JavaScript.",
    options: ["It manages memory allocation", "It is used for DOM manipulation", "It is used to load external scripts", "It is a mechanism that handles asynchronous callbacks"],
    answer: "It is a mechanism that handles asynchronous callbacks"
  },
  {
    question: "What is the difference between '==' and '===' in JavaScript?",
    options: ["They are used for different data types", "'==' checks only the value, while '===' checks both value and type", "There is no difference", "'===' checks only the value, while '==' checks both"],
    answer: "'==' checks only the value, while '===' checks both value and type"
  },
  {
    question: "How does prototypal inheritance work in JavaScript?",
    options: ["Variables inherit methods", "Objects inherit properties from their prototype", "Functions inherit properties from arrays", "Classes inherit properties from other classes"],
    answer: "Objects inherit properties from their prototype"
  },
  {
    question: "What is a closure and why is it useful?",
    options: ["A method for object cloning", "A function that resets its variables", "A function that remembers its outer variables even after execution", "An error handling mechanism"],
    answer: "A function that remembers its outer variables even after execution"
  },
  {
    question: "How do you optimize performance in a large-scale JavaScript application?",
    options: ["By avoiding error handling", "By using global variables", "By minimizing DOM manipulation and using asynchronous techniques", "By writing only synchronous code"],
    answer: "By minimizing DOM manipulation and using asynchronous techniques"
  },
  {
    question: "What are pure functions in JavaScript?",
    options: ["Functions that use async/await", "Functions that do not have side effects and return the same output for the same input", "Functions that rely on external data", "Functions that modify global state"],
    answer: "Functions that do not have side effects and return the same output for the same input"
  },
  {
    question: "Explain the concept of 'this' in JavaScript.",
    options: ["It is always equal to window", "It is used for mathematical operations", "It refers to the context in which a function is executed", "It is a constant variable"],
    answer: "It refers to the context in which a function is executed"
  },
  {
    question: "What is memoization in JavaScript?",
    options: ["A way to bind functions", "A debugging process", "An optimization technique to cache function results", "A method to iterate over arrays"],
    answer: "An optimization technique to cache function results"
  },
  {
    question: "How do you handle errors in asynchronous code?",
    options: ["By using console.log() only", "Using try/catch with async/await or .catch() with Promises", "By ignoring errors", "By stopping the event loop"],
    answer: "Using try/catch with async/await or .catch() with Promises"
  },
  {
    question: "What is the significance of the 'use strict' directive?",
    options: ["It allows global variables", "It disables error handling", "It automatically optimizes code", "It enforces stricter parsing and error handling in your code"],
    answer: "It enforces stricter parsing and error handling in your code"
  }
];


const allQuizzes = {
  jsBasicsQuiz,
  jsVariablesScopeQuiz,
  jsFunctionsQuiz,
  jsES6Quiz,
  jsAsyncQuiz,
  jsDomEventsQuiz,
  jsOperatorsQuiz,
  jsObjectsArraysQuiz,
  jsAdvancedQuiz,
  jsInterviewQuiz
};

export default allQuizzes;
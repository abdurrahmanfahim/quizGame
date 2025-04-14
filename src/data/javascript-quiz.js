// 1. Basics – Fundamental JavaScript concepts
export const jsBasicsQuiz = [
  {
    question: "When was JavaScript first released?",
    options: ["1995", "1996", "2000", "2005"],
    answer: "1995"
  },
  {
    question: "What type of language is JavaScript?",
    options: ["Interpreted", "Compiled", "Markup", "Database"],
    answer: "Interpreted"
  },
  {
    question: "On which platforms can JavaScript be used?",
    options: ["Web browsers", "Servers", "Desktop applications", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which is the correct way to include JavaScript in an HTML document?",
    options: [
      "<script src='app.js'></script>",
      "<js src='app.js'></js>",
      "<link rel='script' href='app.js'>",
      "<style src='app.js'></style>"
    ],
    answer: "<script src='app.js'></script>"
  },
  {
    question: "Is JavaScript a programming language?",
    options: ["Yes", "No", "Neither", "Just a scripting language"],
    answer: "Yes"
  },
  {
    question: "JavaScript does not control which of the following?",
    options: ["Web page content", "User interface", "Server hardware", "Dynamic content"],
    answer: "Server hardware"
  },
  {
    question: "JavaScript is never compiled:",
    options: ["True", "False", "Depends on the context", "Absolutely"],
    answer: "False"
  },
  {
    question: "JavaScript is considered a _______ level language.",
    options: ["Programming", "Markup", "Styling", "Sculpting"],
    answer: "Programming"
  },
  {
    question: "The primary use of JavaScript is:",
    options: ["Web development", "Database management", "System programming", "Application development"],
    answer: "Web development"
  },
  {
    question: "JavaScript is regarded as a _______ level language.",
    options: ["High-level", "Low-level", "Machine-level", "Assembly"],
    answer: "High-level"
  }
];


// 2. Variables & Scope – Variable declarations and scope concepts
export const jsVariablesScopeQuiz = [
  {
    question: "Which keywords can be used to declare variables in JavaScript?",
    options: ["var", "let", "const", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which keyword does not create block scope?",
    options: ["var", "let", "const", "Both let and const"],
    answer: "var"
  },
  {
    question: "What does the term 'scope' refer to in JavaScript?",
    options: [
      "A code block where variables are accessible",
      "The filename",
      "Server location",
      "Software version"
    ],
    answer: "A code block where variables are accessible"
  },
  {
    question: "Where can a globally scoped variable be accessed?",
    options: ["Everywhere", "Inside a function only", "Only within a block", "Only within a module"],
    answer: "Everywhere"
  },
  {
    question: "Block scope is applicable to which keywords?",
    options: ["let and const", "var", "function", "class"],
    answer: "let and const"
  },
  {
    question: "What is hoisting in JavaScript?",
    options: [
      "The lifting of variable and function declarations to the top",
      "Code reset",
      "Data storage",
      "Event handling"
    ],
    answer: "The lifting of variable and function declarations to the top"
  },
  {
    question: "Where can a function-scoped variable be accessed?",
    options: [
      "Only within that function",
      "Everywhere in the script",
      "Only globally",
      "Inside an HTML file"
    ],
    answer: "Only within that function"
  },
  {
    question: "What is variable shadowing?",
    options: [
      "Having variables with the same name in different scopes",
      "Deleting a variable",
      "Encrypting a variable",
      "Copying a variable"
    ],
    answer: "Having variables with the same name in different scopes"
  },
  {
    question: "Is a variable declared with const mutable?",
    options: ["No", "Yes", "Depends on the context", "Only for objects"],
    answer: "No"
  },
  {
    question: "In JavaScript, is the default value of an uninitialized variable undefined?",
    options: ["Yes", "No", "Only with let", "Only with var"],
    answer: "Yes"
  }
];


// 3. Functions & Arrow Functions – Function declarations, expressions, and arrow functions
export const jsFunctionsQuiz = [
  {
    question: "How do you declare a function in JavaScript?",
    options: [
      "function myFunc() {}",
      "var myFunc = () => {}",
      "Both",
      "None"
    ],
    answer: "Both"
  },
  {
    question: "Which of the following is a correct example of an Immediately Invoked Function Expression (IIFE)?",
    options: [
      "(function(){})();",
      "function(){})();",
      "myFunc(){}();",
      "(()=>{})()"
    ],
    answer: "(function(){})();"
  },
  {
    question: "What is the main characteristic of an arrow function?",
    options: [
      "It behaves exactly like a normal function",
      "It has a different 'this' binding",
      "It is circular in nature",
      "None of the above"
    ],
    answer: "It has a different 'this' binding"
  },
  {
    question: "When are default parameters used in a function?",
    options: [
      "When an argument is not provided",
      "Always",
      "Only in arrow functions",
      "Never"
    ],
    answer: "When an argument is not provided"
  },
  {
    question: "What is the difference between function expressions and function declarations?",
    options: [
      "In terms of hoisting",
      "Syntax differences",
      "There is no difference",
      "Not noticeable"
    ],
    answer: "In terms of hoisting"
  },
  {
    question: "What does a higher-order function refer to?",
    options: [
      "A function that takes another function as an argument",
      "A function that multiplies numbers",
      "A function that works only with strings",
      "A function that is erroneous"
    ],
    answer: "A function that takes another function as an argument"
  },
  {
    question: "In which scenario is a callback function most commonly used?",
    options: [
      "In asynchronous operations",
      "In synchronous operations",
      "Inside loops",
      "Within classes"
    ],
    answer: "In asynchronous operations"
  },
  {
    question: "How is 'this' determined in an arrow function?",
    options: [
      "By its lexical context",
      "By its dynamic context",
      "By the window object",
      "It is undefined"
    ],
    answer: "By its lexical context"
  },
  {
    question: "How do you declare rest parameters?",
    options: [
      "...args",
      "args...",
      "rest args",
      "args rest"
    ],
    answer: "...args"
  },
  {
    question: "What does function currying mean?",
    options: [
      "Combining multiple functions into one",
      "Splitting a function into smaller functions based on arguments",
      "Using the same function repeatedly",
      "Returning a function"
    ],
    answer: "Splitting a function into smaller functions based on arguments"
  }
];


// 4. ES6 Features – New features introduced in ES6 (Template literals, destructuring, etc.)
export const jsES6Quiz = [
  {
    question: "Which new keywords were introduced in ES6?",
    options: ["let", "var", "const", "Both let & const"],
    answer: "Both let & const"
  },
  {
    question: "Which symbol is used for template literals?",
    options: ["``", "\"\"", "''", "%%"],
    answer: "``"
  },
  {
    question: "What does destructuring help simplify?",
    options: [
      "Extracting values from objects",
      "Resetting function outputs",
      "Declaring variables",
      "Looping through arrays"
    ],
    answer: "Extracting values from objects"
  },
  {
    question: "What is the correct syntax for the spread operator?",
    options: ["...", "+++", "///", "&&&"],
    answer: "..."
  },
  {
    question: "Which keyword is omitted in the concise syntax of arrow functions?",
    options: ["function", "return", "=>", "Both function and return"],
    answer: "function"
  },
  {
    question: "What is achieved with import/export statements in ES6?",
    options: [
      "Module management",
      "DOM manipulation",
      "Loading style sheets",
      "Memory storage"
    ],
    answer: "Module management"
  },
  {
    question: "How do you declare a class in ES6?",
    options: [
      "class MyClass {}",
      "function MyClass() {}",
      "var MyClass = {}",
      "MyClass() => {}"
    ],
    answer: "class MyClass {}"
  },
  {
    question: "How can you set a default parameter value in a function?",
    options: [
      "function f(x = 10) {}",
      "function f(x : 10) {}",
      "function f(x = '10') {}",
      "function f(x default=10) {}"
    ],
    answer: "function f(x = 10) {}"
  },
  {
    question: "What is the difference between an iterator and a generator?",
    options: [
      "The iterator is itself iterable, whereas a generator is a special kind of function",
      "The generator is iterable, whereas an iterator is a function",
      "There is no difference",
      "Both are the same"
    ],
    answer: "The iterator is itself iterable, whereas a generator is a special kind of function"
  },
  {
    question: "Which of the following is considered an advanced feature in ES6?",
    options: ["Modules", "Callbacks", "Event Loop", "AJAX"],
    answer: "Modules"
  }
];


// 5. Asynchronous JavaScript – Promises, async/await, callbacks, etc.
export const jsAsyncQuiz = [
  {
    question: "What is a Promise in JavaScript?",
    options: [
      "An asynchronous operation",
      "A synchronous operation",
      "A loop",
      "An event"
    ],
    answer: "An asynchronous operation"
  },
  {
    question: "What is the primary purpose of an async function?",
    options: [
      "To convert synchronous code to asynchronous",
      "To speed up code execution",
      "For DOM manipulation",
      "For variable creation"
    ],
    answer: "To convert synchronous code to asynchronous"
  },
  {
    question: "How does the await keyword work?",
    options: [
      "It pauses code execution until a Promise is resolved",
      "It returns the result immediately",
      "It resets the code",
      "It does nothing"
    ],
    answer: "It pauses code execution until a Promise is resolved"
  },
  {
    question: "What is a callback function?",
    options: [
      "A function provided as an argument to another function",
      "A new function declaration",
      "A variable incrementation",
      "A DOM loading method"
    ],
    answer: "A function provided as an argument to another function"
  },
  {
    question: "What is the benefit of promise chaining?",
    options: [
      "Executing multiple asynchronous operations in sequence",
      "Speeding up synchronous operations",
      "Loop execution",
      "DOM updates"
    ],
    answer: "Executing multiple asynchronous operations in sequence"
  },
  {
    question: "Which method is used for error handling in Promises?",
    options: ["catch()", "try()", "error()", "finally()"],
    answer: "catch()"
  },
  {
    question: "Asynchronous programming is also known as:",
    options: ["Non-blocking", "Threaded", "Synchronous", "Blocking"],
    answer: "Non-blocking"
  },
  {
    question: "What is the role of the event loop?",
    options: [
      "Coordinating the call stack and callback queue",
      "Emptying the call stack only",
      "Updating the DOM",
      "Executing synchronous operations"
    ],
    answer: "Coordinating the call stack and callback queue"
  },
  {
    question: "What does setTimeout() do?",
    options: [
      "Executes code after a specified time delay",
      "Executes code immediately",
      "Declares variables",
      "Modifies the DOM"
    ],
    answer: "Executes code after a specified time delay"
  },
  {
    question: "What are the three states of a Promise?",
    options: [
      "Pending, Fulfilled, Rejected",
      "Started, Running, Ended",
      "Initialized, In Progress, Completed",
      "None of these"
    ],
    answer: "Pending, Fulfilled, Rejected"
  }
];


// 6. DOM & Events – Document Object Model and event handling
export const jsDomEventsQuiz = [
  {
    question: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Data Object Model",
      "Digital Object Model",
      "Desktop Object Model"
    ],
    answer: "Document Object Model"
  },
  {
    question: "How can you select an HTML element using JavaScript?",
    options: [
      "document.getElementById()",
      "document.querySelector()",
      "Both",
      "None"
    ],
    answer: "Both"
  },
  {
    question: "What is event bubbling?",
    options: [
      "The propagation of events upward through the DOM",
      "Stopping an event",
      "Accelerating an event",
      "Resetting an event"
    ],
    answer: "The propagation of events upward through the DOM"
  },
  {
    question: "What does event capturing mean?",
    options: [
      "Events are captured from the outer nodes first",
      "Events start from the last node",
      "Events are halted",
      "None of the above"
    ],
    answer: "Events are captured from the outer nodes first"
  },
  {
    question: "What is the correct syntax for addEventListener()?",
    options: [
      "element.addEventListener('click', function() {})",
      "element.onClick('click', function() {})",
      "addEventListener(element, 'click', function() {})",
      "element.addListener('click', function() {})"
    ],
    answer: "element.addEventListener('click', function() {})"
  },
  {
    question: "What is event delegation?",
    options: [
      "Attaching a single event handler to a parent element to handle events from its children",
      "Adding separate events to each element",
      "Stopping events entirely",
      "None of the above"
    ],
    answer: "Attaching a single event handler to a parent element to handle events from its children"
  },
  {
    question: "What does the DOMContentLoaded event signify?",
    options: [
      "The HTML document has been completely loaded",
      "CSS files have loaded",
      "JavaScript has loaded first",
      "No event"
    ],
    answer: "The HTML document has been completely loaded"
  },
  {
    question: "Which event is most appropriate for user interaction?",
    options: ["click", "load", "scroll", "resize"],
    answer: "click"
  },
  {
    question: "What does event.preventDefault() do?",
    options: [
      "Stops the default action of an event",
      "Logs the event",
      "Triggers the event",
      "Deletes the event"
    ],
    answer: "Stops the default action of an event"
  },
  {
    question: "What does stopPropagation() do?",
    options: [
      "Stops event bubbling",
      "Initiates an event",
      "Resets event data",
      "None of the above"
    ],
    answer: "Stops event bubbling"
  }
];


// 7. Operators & Comparisons – Operators and comparisons in JavaScript
export const jsOperatorsQuiz = [
  {
    question: "Which operator checks both type and value?",
    options: ["==", "===", "=", "!="],
    answer: "==="
  },
  {
    question: "Which operator indicates inequality?",
    options: ["!=", "!==", "not =", "All of the above"],
    answer: "!=="
  },
  {
    question: "What is the correct syntax for the ternary operator?",
    options: [
      "condition ? expr1 : expr2",
      "condition : expr1 ? expr2",
      "expr1 ? condition : expr2",
      "condition ? : expr2"
    ],
    answer: "condition ? expr1 : expr2"
  },
  {
    question: "Which symbol represents the logical AND operator?",
    options: ["&&", "||", "!!", "##"],
    answer: "&&"
  },
  {
    question: "Which symbol represents the logical OR operator?",
    options: ["||", "&&", "!!", "%%"],
    answer: "||"
  },
  {
    question: "Which of the following is an example of the increment operator?",
    options: ["i++", "++i", "i += 1", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which of the following is an example of the decrement operator?",
    options: ["i--", "--i", "i -= 1", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which operator is used as the bitwise AND?",
    options: ["&", "&&", "|", "||"],
    answer: "&"
  },
  {
    question: "What does the equality operator '==' check?",
    options: [
      "Only value",
      "Only type",
      "Both value and type",
      "None"
    ],
    answer: "Only value"
  },
  {
    question: "What does the typeof operator return?",
    options: [
      "The data type of a variable",
      "The value of a variable",
      "The name of a variable",
      "None"
    ],
    answer: "The data type of a variable"
  }
];


// 8. Objects & Arrays – Techniques for using objects and arrays
export const jsObjectsArraysQuiz = [
  {
    question: "What is an object literal?",
    options: [
      "A collection of key-value pairs",
      "An array-like structure",
      "A list of strings",
      "Similar to a set"
    ],
    answer: "A collection of key-value pairs"
  },
  {
    question: "How do you access values from an object?",
    options: [
      "Using both dot notation and bracket notation",
      "Only dot notation",
      "Only bracket notation",
      "There is no way"
    ],
    answer: "Using both dot notation and bracket notation"
  },
  {
    question: "What does Array.push() do?",
    options: [
      "Adds a new item",
      "Removes an item",
      "Finds an item",
      "Updates an item"
    ],
    answer: "Adds a new item"
  },
  {
    question: "What does Array.pop() do?",
    options: [
      "Removes the last item",
      "Removes the first item",
      "Removes an item from the middle",
      "Adds an item"
    ],
    answer: "Removes the last item"
  },
  {
    question: "What is the purpose of the forEach() method?",
    options: [
      "To perform an operation on each element of an array",
      "To create a new array",
      "To filter an array",
      "To sort an array"
    ],
    answer: "To perform an operation on each element of an array"
  },
  {
    question: "What does the map() method do?",
    options: [
      "Applies a function to each element and returns a new array",
      "Removes all elements",
      "Updates the array",
      "Filters the array"
    ],
    answer: "Applies a function to each element and returns a new array"
  },
  {
    question: "What does Object.keys() return?",
    options: [
      "An array of all the keys in an object",
      "The values of the object",
      "A duplicate of the object",
      "Nothing"
    ],
    answer: "An array of all the keys in an object"
  },
  {
    question: "What is the purpose of Array.filter()?",
    options: [
      "To find elements that match a condition",
      "To add all elements",
      "To remove the last element",
      "To create an object"
    ],
    answer: "To find elements that match a condition"
  },
  {
    question: "Which data structures can be easily destructured using destructuring assignment?",
    options: [
      "Both objects and arrays",
      "Only objects",
      "Only arrays",
      "None"
    ],
    answer: "Both objects and arrays"
  },
  {
    question: "What does the spread operator do?",
    options: [
      "Clones and merges objects/arrays",
      "Filters an array",
      "Deletes an object",
      "None"
    ],
    answer: "Clones and merges objects/arrays"
  }
];


// 9. Advanced Concepts – Closures, prototypes, promises, etc.
export const jsAdvancedQuiz = [
  {
    question: "What is a closure?",
    options: [
      "A function defined inside another function that accesses external variables",
      "A type of object",
      "An asynchronous operation",
      "Function hoisting"
    ],
    answer: "A function defined inside another function that accesses external variables"
  },
  {
    question: "What is prototypal inheritance used for?",
    options: [
      "To inherit properties and methods from another object",
      "To create new functions",
      "To reset variables",
      "To update the DOM"
    ],
    answer: "To inherit properties and methods from another object"
  },
  {
    question: "Why is closure often used in an IIFE?",
    options: [
      "To protect data from the global scope",
      "To speed up the code",
      "To reduce the number of variables",
      "To store data"
    ],
    answer: "To protect data from the global scope"
  },
  {
    question: "What does currying do?",
    options: [
      "Transforms a function into a sequence of functions based on arguments",
      "Combines multiple functions",
      "Filters data",
      "None of these"
    ],
    answer: "Transforms a function into a sequence of functions based on arguments"
  },
  {
    question: "What is the benefit of function memoization?",
    options: [
      "Reusing previously calculated results",
      "Creating new functions",
      "Synchronous operations",
      "Event handling"
    ],
    answer: "Reusing previously calculated results"
  },
  {
    question: "What is the purpose of call(), apply(), and bind() methods?",
    options: [
      "To control the 'this' context and invoke functions",
      "To declare variables",
      "For asynchronous operations",
      "None of the above"
    ],
    answer: "To control the 'this' context and invoke functions"
  },
  {
    question: "What is the purpose of strict mode?",
    options: [
      "It enforces stricter parsing and error handling in your code",
      "It speeds up code execution",
      "It updates the DOM",
      "It deletes variables"
    ],
    answer: "It enforces stricter parsing and error handling in your code"
  },
  {
    question: "What is the relationship between the event loop and the call stack?",
    options: [
      "They regulate each other",
      "The call stack is managed by the event loop",
      "The call stack drives the event loop",
      "There is no relationship"
    ],
    answer: "They regulate each other"
  },
  {
    question: "How does garbage collection work in JavaScript?",
    options: [
      "It frees up unused memory",
      "It stores data",
      "It calls functions",
      "It updates data"
    ],
    answer: "It frees up unused memory"
  },
  {
    question: "What is the main purpose of the decorator pattern?",
    options: [
      "Dynamically modifying the behavior of a function or object",
      "Creating new functions",
      "Encrypting code",
      "Resetting variables"
    ],
    answer: "Dynamically modifying the behavior of a function or object"
  }
];


// 10. Interview Questions – Intermediate to advanced level interview questions
export const jsInterviewQuiz = [
  {
    question: "Explain the event loop in JavaScript.",
    options: [
      "It is a mechanism that handles asynchronous callbacks",
      "It is used to load external scripts",
      "It manages memory allocation",
      "It is used for DOM manipulation"
    ],
    answer: "It is a mechanism that handles asynchronous callbacks"
  },
  {
    question: "What is the difference between '==' and '===' in JavaScript?",
    options: [
      "'==' checks value only, while '===' checks both value and type",
      "'===' checks value only, while '==' checks both",
      "There is no difference",
      "They are used for different data types"
    ],
    answer: "'==' checks value only, while '===' checks both value and type"
  },
  {
    question: "How does prototypal inheritance work in JavaScript?",
    options: [
      "Objects inherit properties from their prototype",
      "Classes inherit properties from other classes",
      "Variables inherit methods",
      "Functions inherit properties from arrays"
    ],
    answer: "Objects inherit properties from their prototype"
  },
  {
    question: "What is a closure and why is it useful?",
    options: [
      "A function that remembers its outer variables even after execution",
      "A function that resets its variables",
      "A method for cloning objects",
      "An error-handling mechanism"
    ],
    answer: "A function that remembers its outer variables even after execution"
  },
  {
    question: "How do you optimize performance in a large-scale JavaScript application?",
    options: [
      "By minimizing DOM manipulation and using asynchronous techniques",
      "By using global variables",
      "By writing synchronous code only",
      "By avoiding error handling"
    ],
    answer: "By minimizing DOM manipulation and using asynchronous techniques"
  },
  {
    question: "What are Pure Functions in JavaScript?",
    options: [
      "Functions that do not have side effects and return the same output for the same input",
      "Functions that modify global state",
      "Functions that use async/await",
      "Functions that rely on external data"
    ],
    answer: "Functions that do not have side effects and return the same output for the same input"
  },
  {
    question: "Explain the concept of 'this' in JavaScript.",
    options: [
      "It refers to the context in which a function is executed",
      "It is always equal to the window object",
      "It is used for mathematical operations",
      "It is a constant variable"
    ],
    answer: "It refers to the context in which a function is executed"
  },
  {
    question: "What is memoization in JavaScript?",
    options: [
      "An optimization technique to cache function results",
      "A debugging process",
      "A method to iterate over arrays",
      "A way to bind functions"
    ],
    answer: "An optimization technique to cache function results"
  },
  {
    question: "How do you handle errors in asynchronous code?",
    options: [
      "Using try/catch with async/await or .catch() with Promises",
      "By ignoring the errors",
      "By using console.log() only",
      "By stopping the event loop"
    ],
    answer: "Using try/catch with async/await or .catch() with Promises"
  },
  {
    question: "What is the significance of the 'use strict' directive?",
    options: [
      "It enforces stricter parsing and error handling in your code",
      "It allows global variables",
      "It automatically optimizes code",
      "It disables error handling"
    ],
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
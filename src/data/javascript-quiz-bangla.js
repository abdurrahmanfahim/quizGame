// ১. Basics – বেসিক ধারণা ও JS-এর মৌলিক বিষয়
export const jsBasicsQuiz = [
  {
    question: "JavaScript কবে প্রথম প্রকাশিত হয়?",
    options: ["1995", "1996", "2000", "2005"],
    answer: "1995"
  },
  {
    question: "JavaScript কি ধরনের ভাষা?",
    options: ["Interpreted", "Compiled", "Markup", "Database"],
    answer: "Interpreted"
  },
  {
    question: "JavaScript কোন প্ল্যাটফর্মে ব্যবহার করা যায়?",
    options: ["ওয়েব ব্রাউজার", "সার্ভার", "ডেস্কটপ অ্যাপ", "সবগুলো"],
    answer: "সবগুলো"
  },
  {
    question: "HTML এর সাথে JavaScript সংযুক্ত করার সঠিক উপায় কোনটি?",
    options: [
      "<script src='app.js'></script>",
      "<js src='app.js'></js>",
      "<link rel='script' href='app.js'>",
      "<style src='app.js'></style>"
    ],
    answer: "<script src='app.js'></script>"
  },
  {
    question: "JavaScript কি একটি প্রোগ্রামিং ভাষা?",
    options: ["হ্যাঁ", "না", "কোনওটাই না", "শুধু স্ক্রিপ্টিং"],
    answer: "হ্যাঁ"
  },
  {
    question: "JavaScript কেও নিয়ন্ত্রণ করে না:",
    options: ["ওয়েব পেজ", "ইউজার ইন্টারফেস", "সার্ভার হার্ডওয়্যার", "ডাইনামিক কন্টেন্ট"],
    answer: "সার্ভার হার্ডওয়্যার"
  },
  {
    question: "JavaScript কে কখনও কম্পাইল করা হয় না:",
    options: ["সঠিক", "ভুল", "পরিস্থিতির উপর নির্ভর করে", "একান্তভাবে"],
    answer: "ভুল"
  },
  {
    question: "JavaScript একটি _______ ভাষা।",
    options: ["প্রোগ্রামিং", "মার্কআপ", "স্টাইল", "ভাস্কর্য"],
    answer: "প্রোগ্রামিং"
  },
  {
    question: "JavaScript এর প্রধান ব্যবহার:",
    options: ["ওয়েব ডেভেলপমেন্ট", "ডাটাবেজ ম্যানেজমেন্ট", "সিস্টেম প্রোগ্রামিং", "অ্যাপ ডেভেলপমেন্ট"],
    answer: "ওয়েব ডেভেলপমেন্ট"
  },
  {
    question: "JavaScript কোন ধরনের ভাষা হিসেবে বিবেচিত?",
    options: ["High-level", "Low-level", "Machine-level", "Assembly"],
    answer: "High-level"
  }
];


// ২. Variables & Scope – ভ্যারিয়েবল, ডিক্লেয়ারেশন ও স্কোপ কনসেপ্ট
export const jsVariablesScopeQuiz = [
  {
    question: "JavaScript এ ভ্যারিয়েবল ডিক্লেয়ার করতে কোন কীওয়ার্ড ব্যাবহার করা যায়?",
    options: ["var", "let", "const", "সবগুলো"],
    answer: "সবগুলো"
  },
  {
    question: "কোন কীওয়ার্ড ব্লক স্কোপ তৈরি করে না?",
    options: ["var", "let", "const", "উভয়ই"],
    answer: "var"
  },
  {
    question: "স্কোপ (scope) বলতে কী বুঝায়?",
    options: [
      "কোড ব্লক যেখানে ভ্যারিয়েবল অ্যাক্সেসযোগ্য",
      "ফাইলের নাম",
      "সার্ভারের অবস্থান",
      "সফটওয়্যারের সংস্করণ"
    ],
    answer: "কোড ব্লক যেখানে ভ্যারিয়েবল অ্যাক্সেসযোগ্য"
  },
  {
    question: "Global scope এর ভ্যারিয়েবল কোথায় অ্যাক্সেসযোগ্য?",
    options: ["সকল জায়গায়", "শুধু ফাংশনের ভিতরে", "কেবল ব্লকে", "কেবল মডিউলে"],
    answer: "সকল জায়গায়"
  },
  {
    question: "Block scope শুধুমাত্র কোন কীওয়ার্ডের ক্ষেত্রে প্রযোজ্য?",
    options: ["let ও const", "var", "function", "class"],
    answer: "let ও const"
  },
  {
    question: "JavaScript এ hoisting মানে কী?",
    options: [
      "ভ্যারিয়েবল ও ফাংশন ডিক্লেয়ারেশন উপরে টানা হয়",
      "কোড রিসেট হয়",
      "ডাটা স্টোরেজ",
      "ইভেন্ট হ্যান্ডলার"
    ],
    answer: "ভ্যারিয়েবল ও ফাংশন ডিক্লেয়ারেশন উপরে টানা হয়"
  },
  {
    question: "Function scope এর ভ্যারিয়েবল কোথায় অ্যাক্সেসযোগ্য?",
    options: [
      "সেটা শুধু ঐ ফাংশনের ভিতরে",
      "সারা স্ক্রিপ্টে",
      "কেবল গ্লোবালে",
      "HTML ফাইলে"
    ],
    answer: "সেটা শুধু ঐ ফাংশনের ভিতরে"
  },
  {
    question: "Variable shadowing কী?",
    options: [
      "একই নামে ভ্যারিয়েবল দুই স্কোপে থাকা",
      "ভ্যারিয়েবল মুছে ফেলা",
      "ভ্যারিয়েবল এনক্রিপশন",
      "ভ্যারিয়েবল কপি করা"
    ],
    answer: "একই নামে ভ্যারিয়েবল দুই স্কোপে থাকা"
  },
  {
    question: "const দিয়ে ডিক্লেয়ার করা ভ্যারিয়েবল কি পরিবর্তনশীল?",
    options: ["না", "হ্যাঁ", "পরিস্থিতির উপর নির্ভর করে", "কেবল অবজেক্ট"],
    answer: "না"
  },
  {
    question: "জাভাস্ক্রিপ্ট এ কি variable declaration এর default value undefined?",
    options: ["হ্যাঁ", "না", "শুধু let এ", "শুধু var এ"],
    answer: "হ্যাঁ"
  }
];


// ৩. Functions & Arrow Functions – ফাংশন ধারণা ও অ্যারো ফাংশন
export const jsFunctionsQuiz = [
  {
    question: "JavaScript এ ফাংশন কীভাবে ডিক্লেয়ার করা হয়?",
    options: [
      "function myFunc() {}",
      "var myFunc = () => {}",
      "উভয়টাই",
      "কোনওটাই"
    ],
    answer: "উভয়টাই"
  },
  {
    question: "Immediately Invoked Function Expression (IIFE) এর সঠিক উদাহরণ কী?",
    options: [
      "(function(){})();",
      "function(){})();",
      "myFunc(){}();",
      "(()=>{})()"
    ],
    answer: "(function(){})();"
  },
  {
    question: "Arrow function এর মূল বৈশিষ্ট্য কী?",
    options: [
      "সাধারণ ফাংশনের মত behavior",
      "this binding এর পরিবর্তন",
      "গোলাকার ফাংশন",
      "কোনও নেই"
    ],
    answer: "this binding এর পরিবর্তন"
  },
  {
    question: "Default parameters কবে ব্যবহার করা হয়?",
    options: [
      "ফাংশনে কোন আর্গুমেন্ট না দিলে",
      "সবসময়",
      "শুধু arrow function এ",
      "কোনও ক্ষেত্রে না"
    ],
    answer: "ফাংশনে কোন আর্গুমেন্ট না দিলে"
  },
  {
    question: "Function expressions ও Function declarations এর মধ্যে পার্থক্য কী?",
    options: [
      "Hoisting এর ক্ষেত্রে",
      "Syntax এর ক্ষেত্রে",
      "কোনও পার্থক্য নেই",
      "দেখা যায় না"
    ],
    answer: "Hoisting এর ক্ষেত্রে"
  },
  {
    question: "Higher-order function বলতে কী বোঝায়?",
    options: [
      "ফাংশন যা অন্য ফাংশনকে আর্গুমেন্ট হিসেবে নেয়",
      "ফাংশন যা সংখ্যা গুনে",
      "ফাংশন যা শুধু string নিয়ে কাজ করে",
      "ফাংশন যা ভুল হয়"
    ],
    answer: "ফাংশন যা অন্য ফাংশনকে আর্গুমেন্ট হিসেবে নেয়"
  },
  {
    question: "Callback function এর ব্যবহার কোন ক্ষেত্রে বেশি?",
    options: [
      "অ্যাসিঙ্ক্রোনাস অপারেশনে",
      "সিঙ্ক্রোনাস অপারেশনে",
      "Loop এর মধ্যে",
      "Class এর মধ্যে"
    ],
    answer: "অ্যাসিঙ্ক্রোনাস অপারেশনে"
  },
  {
    question: "Arrow function এ 'this' কিভাবে নির্ধারিত হয়?",
    options: [
      "lexical context অনুযায়ী",
      "dynamic context অনুযায়ী",
      "window object",
      "undefined"
    ],
    answer: "lexical context অনুযায়ী"
  },
  {
    question: "Rest parameter কীভাবে ডিক্লেয়ার করা হয়?",
    options: [
      "...args",
      "args...",
      "rest args",
      "args rest"
    ],
    answer: "...args"
  },
  {
    question: "Function currying অর্থ কি?",
    options: [
      "একাধিক ফাংশনকে একত্রিত করা",
      "ফাংশনকে আর্গুমেন্ট ভাগ করে ছোট ফাংশন তৈরি করা",
      "একই ফাংশন বার বার ব্যবহার",
      "ফাংশন রিটার্ন করা"
    ],
    answer: "ফাংশনকে আর্গুমেন্ট ভাগ করে ছোট ফাংশন তৈরি করা"
  }
];


// ৪. ES6 Features – নতুন ফিচারসমূহ (Template literals, Destructuring, etc.)
export const jsES6Quiz = [
  {
    question: "ES6 এর নতুন কীওয়ার্ড কোনটি?",
    options: ["let", "var", "const", "উভয় let ও const"],
    answer: "উভয় let ও const"
  },
  {
    question: "Template literals কোন সিম্বল দিয়ে লেখা হয়?",
    options: ["``", "\"\"", "''", "%%"],
    answer: "``"
  },
  {
    question: "Destructuring এর মাধ্যমে কোন কাজটি সহজ হয়?",
    options: [
      "অবজেক্ট থেকে মান বের করা",
      "ফাংশনের ফলাফল রিসেট করা",
      "ভ্যারিয়েবল ডিক্লেয়ার করা",
      "Loop চালানো"
    ],
    answer: "অবজেক্ট থেকে মান বের করা"
  },
  {
    question: "Spread operator এর সঠিক লিখন কী?",
    options: ["...", "+++", "///", "&&&"],
    answer: "..."
  },
  {
    question: "Arrow function এর সংক্ষিপ্ত সিনট্যাক্সে কোন কীওয়ার্ড ব্যবহার হয় না?",
    options: ["function", "return", "=>", "Both function and return"],
    answer: "function"
  },
  {
    question: "ES6 এ import/export এর মাধ্যমে কী করা হয়?",
    options: [
      "মডিউল ব্যবস্থাপনা",
      "DOM ম্যানিপুলেশন",
      "স্টাইল শীট লোড",
      "স্মৃতি সংরক্ষণ"
    ],
    answer: "মডিউল ব্যবস্থাপনা"
  },
  {
    question: "Class syntax ES6 এ কীভাবে ডিক্লেয়ার করা হয়?",
    options: [
      "class MyClass {}",
      "function MyClass() {}",
      "var MyClass = {}",
      "MyClass() => {}"
    ],
    answer: "class MyClass {}"
  },
  {
    question: "Default parameter value কিভাবে সেট করা যায়?",
    options: [
      "function f(x = 10) {}",
      "function f(x : 10) {}",
      "function f(x = '10') {}",
      "function f(x default=10) {}"
    ],
    answer: "function f(x = 10) {}"
  },
  {
    question: "Iterator ও Generator এর মধ্যে পার্থক্য কী?",
    options: [
      "Iterator নিজে ইটেরেবল, Generator ফাংশন",
      "Generator নিজে ইটেরেবল, Iterator ফাংশন",
      "কোন পার্থক্য নেই",
      "উভয়ই একই"
    ],
    answer: "Iterator নিজে ইটেরেবল, Generator ফাংশন"
  },
  {
    question: "ES6 এর উন্নত ফিচার হিসেবে __ ব্যবহার করা হয়?",
    options: ["Modules", "Callbacks", "Event Loop", "AJAX"],
    answer: "Modules"
  }
];


// ৫. Asynchronous JavaScript – Promise, async/await, Callback ইত্যাদি
export const jsAsyncQuiz = [
  {
    question: "Promise কী?",
    options: [
      "একটি asynchronous অপারেশন",
      "সিঙ্ক্রোনাস অপারেশন",
      "একটি লুপ",
      "একটি ইভেন্ট"
    ],
    answer: "একটি asynchronous অপারেশন"
  },
  {
    question: "async function এর মূল উদ্দেশ্য কী?",
    options: [
      "সিঙ্ক্রোনাস কোডকে asynchronous করে তোলা",
      "কোডকে দ্রুত করা",
      "DOM ম্যানিপুলেশন",
      "নতুন ভ্যারিয়েবল তৈরি করা"
    ],
    answer: "সিঙ্ক্রোনাস কোডকে asynchronous করে তোলা"
  },
  {
    question: "await কীভাবে কাজ করে?",
    options: [
      "Promise এর রেজলভ হওয়া পর্যন্ত কোড থামিয়ে রাখে",
      "সরাসরি ফলাফল দেয়",
      "কোড রিসেট করে",
      "কোনও কাজ করে না"
    ],
    answer: "Promise এর রেজলভ হওয়া পর্যন্ত কোড থামিয়ে রাখে"
  },
  {
    question: "Callback ফাংশন কী?",
    options: [
      "অন্য ফাংশনের আর্গুমেন্ট হিসাবে প্রদানকৃত ফাংশন",
      "নতুন ফাংশন ডিক্লেয়ারেশন",
      "ভ্যারিয়েবল ইনক্রিমেন্ট",
      "DOM লোড"
    ],
    answer: "অন্য ফাংশনের আর্গুমেন্ট হিসাবে প্রদানকৃত ফাংশন"
  },
  {
    question: "Promise chaining এর উপকারিতা কী?",
    options: [
      "একাধিক asynchronous অপারেশনকে সিকোয়েন্সে চালানো",
      "সিঙ্ক্রোনাস অপারেশন দ্রুত করা",
      "লুপ কার্যক্রম",
      "DOM আপডেট করা"
    ],
    answer: "একাধিক asynchronous অপারেশনকে সিকোয়েন্সে চালানো"
  },
  {
    question: "Error handling এর জন্য Promise এ কোন মেথড ব্যাবহার করা হয়?",
    options: ["catch()", "try()", "error()", "finally()"],
    answer: "catch()"
  },
  {
    question: "Asynchronous programming কে আরও কী বলা হয়?",
    options: ["Non-blocking", "Threaded", "Synchronous", "Blocking"],
    answer: "Non-blocking"
  },
  {
    question: "Event loop এর ভূমিকা কী?",
    options: [
      "Call stack ও Callback queue সমন্বয় করা",
      "কেবল Call stack খালি করা",
      "DOM আপডেট করা",
      "সিঙ্ক্রোনাস অপারেশন চালানো"
    ],
    answer: "Call stack ও Callback queue সমন্বয় করা"
  },
  {
    question: "setTimeout() ফাংশনের ভূমিকা কী?",
    options: [
      "নির্দিষ্ট সময় পরে কোড এক্সিকিউট করা",
      "তৎক্ষণাৎ কোড এক্সিকিউট করা",
      "ভ্যারিয়েবল ডিক্লেয়ার করা",
      "DOM পরিবর্তন করা"
    ],
    answer: "নির্দিষ্ট সময় পরে কোড এক্সিকিউট করা"
  },
  {
    question: "Promise এর three states কী কী?",
    options: [
      "Pending, Fulfilled, Rejected",
      "Started, Running, Ended",
      "Initialized, In Progress, Completed",
      "None of these"
    ],
    answer: "Pending, Fulfilled, Rejected"
  }
];


// ৬. DOM & Events – ডম (Document Object Model) ও ইভেন্ট হ্যান্ডলিং
export const jsDomEventsQuiz = [
  {
    question: "DOM এর পূর্ণরূপ কী?",
    options: [
      "Document Object Model",
      "Data Object Model",
      "Digital Object Model",
      "Desktop Object Model"
    ],
    answer: "Document Object Model"
  },
  {
    question: "কীভাবে একটি HTML ইলিমেন্টকে JavaScript দিয়ে নির্বাচন করা যায়?",
    options: [
      "document.getElementById()",
      "document.querySelector()",
      "উভয়",
      "কোনওটি নয়"
    ],
    answer: "উভয়"
  },
  {
    question: "Event bubbling কী?",
    options: [
      "ইভেন্টের ক্রমাগত প্রবাহ যা DOM এ উপরের দিকে উঠে",
      "ইভেন্ট থামানো",
      "ইভেন্টের গতি বৃদ্ধি",
      "ইভেন্টের রিসেট"
    ],
    answer: "ইভেন্টের ক্রমাগত প্রবাহ যা DOM এ উপরের দিকে উঠে"
  },
  {
    question: "Event capturing এর অর্থ কি?",
    options: [
      "ইভেন্ট প্রথমে টার্গেটের উপরের নোডগুলো থেকে ধরা হয়",
      "ইভেন্ট শেষের নোড থেকে শুরু হয়",
      "ইভেন্ট থামানো হয়",
      "কোনওটি নয়"
    ],
    answer: "ইভেন্ট প্রথমে টার্গেটের উপরের নোডগুলো থেকে ধরা হয়"
  },
  {
    question: "addEventListener() মেথডের সঠিক সিনট্যাক্স কী?",
    options: [
      "element.addEventListener('click', function() {})",
      "element.onClick('click', function() {})",
      "addEventListener(element, 'click', function() {})",
      "element.addListener('click', function() {})"
    ],
    answer: "element.addEventListener('click', function() {})"
  },
  {
    question: "Event delegation কী?",
    options: [
      "একটি প্যারেন্ট এলিমেন্টে ইভেন্ট হ্যান্ডলার দিয়ে অনেক চাইল্ড হ্যান্ডেল করা",
      "প্রত্যেক ইলিমেন্টে পৃথক ইভেন্ট যোগ করা",
      "ইভেন্ট বন্ধ করা",
      "কোনওটিই নয়"
    ],
    answer: "একটি প্যারেন্ট এলিমেন্টে ইভেন্ট হ্যান্ডলার দিয়ে অনেক চাইল্ড হ্যান্ডেল করা"
  },
  {
    question: "DOMContentLoaded ইভেন্ট কী নির্দেশ করে?",
    options: [
      "HTML ডকুমেন্ট পুরোপুরি লোড হয়েছে",
      "CSS ফাইল লোড হয়েছে",
      "সবার আগে JavaScript লোড হয়েছে",
      "কোনও ইভেন্ট নয়"
    ],
    answer: "HTML ডকুমেন্ট পুরোপুরি লোড হয়েছে"
  },
  {
    question: "কোন ইভেন্ট UI interaction এর জন্য উত্তম?",
    options: [
      "click",
      "load",
      "scroll",
      "resize"
    ],
    answer: "click"
  },
  {
    question: "Event.preventDefault() এর কাজ কি?",
    options: [
      "ডিফল্ট ইভেন্ট অ্যাকশন আটকানো",
      "ইভেন্ট লগ করা",
      "ইভেন্ট ফায়ার করা",
      "ইভেন্ট ডিলেট করা"
    ],
    answer: "ডিফল্ট ইভেন্ট অ্যাকশন আটকানো"
  },
  {
    question: "stopPropagation() মেথডের মাধ্যমে কী করা যায়?",
    options: [
      "ইভেন্ট bubbling বন্ধ করা",
      "ইভেন্ট শুরু করা",
      "ইভেন্ট ডাটা রিসেট করা",
      "কোনওটি নয়"
    ],
    answer: "ইভেন্ট bubbling বন্ধ করা"
  }
];


// ৭. Operators & Comparisons – অপারেটর ও তুলনা সংক্রান্ত প্রশ্ন
export const jsOperatorsQuiz = [
  {
    question: "কোন অপারেটরটি টাইপ ও মান উভয় চেক করে?",
    options: ["==", "===", "=", "!="],
    answer: "==="
  },
  {
    question: "কোন অপারেটরটি সমান না হওয়া নির্দেশ করে?",
    options: ["!=", "!==", "not =", "সবগুলো"],
    answer: "!=="
  },
  {
    question: "Ternary operator এর সঠিক সিনট্যাক্স কী?",
    options: [
      "condition ? expr1 : expr2",
      "condition : expr1 ? expr2",
      "expr1 ? condition : expr2",
      "condition ? : expr2"
    ],
    answer: "condition ? expr1 : expr2"
  },
  {
    question: "Logical AND operator কোনটি?",
    options: ["&&", "||", "!!", "##"],
    answer: "&&"
  },
  {
    question: "Logical OR operator কী?",
    options: ["||", "&&", "!!", "%%"],
    answer: "||"
  },
  {
    question: "Increment operator এর উদাহরণ:",
    options: ["i++", "++i", "i += 1", "সবগুলো"],
    answer: "সবগুলো"
  },
  {
    question: "Decrement operator এর উদাহরণ:",
    options: ["i--", "--i", "i -= 1", "সবগুলো"],
    answer: "সবগুলো"
  },
  {
    question: "Bitwise AND operator কোনটি?",
    options: ["&", "&&", "|", "||"],
    answer: "&"
  },
  {
    question: "Equality operator '==' কাকে বোঝায়?",
    options: [
      "শুধু মান চেক করে",
      "টাইপ চেক করে",
      "মান ও টাইপ উভয় চেক করে",
      "কোনওটাই"
    ],
    answer: "শুধু মান চেক করে"
  },
  {
    question: "typeof অপারেটরের আউটপুট নির্ধারণে কি ব্যবহৃত?",
    options: ["ভ্যারিয়েবলের ডাটা টাইপ", "ভ্যারিয়েবলের মান", "ভ্যারিয়েবলের নাম", "কোনওটাই"],
    answer: "ভ্যারিয়েবলের ডাটা টাইপ"
  }
];


// ৮. Objects & Arrays – অবজেক্ট ও অ্যারে ব্যবহারের কৌশল
export const jsObjectsArraysQuiz = [
  {
    question: "অবজেক্ট লিটারাল কী?",
    options: [
      "কী-ভ্যালু পেয়ারের সংগ্রহ",
      "অ্যারের মত",
      "স্রিং তালিকা",
      "সেটের মত"
    ],
    answer: "কী-ভ্যালু পেয়ারের সংগ্রহ"
  },
  {
    question: "অবজেক্ট থেকে কীভাবে মান পড়া যায়?",
    options: [
      "dot notation ও bracket notation",
      "শুধু dot notation",
      "শুধু bracket notation",
      "কোনও উপায় নেই"
    ],
    answer: "dot notation ও bracket notation"
  },
  {
    question: "Array.push() মেথডের কাজ কী?",
    options: ["নতুন আইটেম যুক্ত করা", "আইটেম সরানো", "আইটেম খোঁজা", "আইটেম আপডেট করা"],
    answer: "নতুন আইটেম যুক্ত করা"
  },
  {
    question: "Array.pop() এর কাজ কী?",
    options: [
      "শেষ আইটেম সরানো",
      "প্রথম আইটেম সরানো",
      "মাঝের আইটেম সরানো",
      "আইটেম যোগ করা"
    ],
    answer: "শেষ আইটেম সরানো"
  },
  {
    question: "forEach() মেথডের মাধ্যমে কী করা যায়?",
    options: [
      "অ্যারের প্রতিটি উপাদানের উপর অপারেশন চালানো",
      "নতুন অ্যারে তৈরি",
      "অ্যারে ফিল্টার করা",
      "অ্যারে সার্ট করা"
    ],
    answer: "অ্যারের প্রতিটি উপাদানের উপর অপারেশন চালানো"
  },
  {
    question: "Map() মেথডের ব্যবহার:",
    options: [
      "অ্যারের প্রতিটি উপাদানে ফাংশন প্রয়োগ ও নতুন অ্যারে রিটার্ন",
      "সবার উপাদান সরানো",
      "অ্যারে আপডেট করা",
      "অ্যারে ফিল্টার করা"
    ],
    answer: "অ্যারের প্রতিটি উপাদানে ফাংশন প্রয়োগ ও নতুন অ্যারে রিটার্ন"
  },
  {
    question: "Object.keys() মেথড কি করে?",
    options: [
      "অবজেক্টের সকল কী এর অ্যারে প্রদান করে",
      "অবজেক্টের মান প্রদান করে",
      "অবজেক্টের ডুপ্লিকেট তৈরি করে",
      "কিছুই নয়"
    ],
    answer: "অবজেক্টের সকল কী এর অ্যারে প্রদান করে"
  },
  {
    question: "Array.filter() এর উদ্দেশ্য কি?",
    options: [
      "নির্দিষ্ট শর্ত পূরণকারী উপাদান বের করা",
      "সব উপাদান যোগ করা",
      "শেষ উপাদান সরানো",
      "অবজেক্ট তৈরি করা"
    ],
    answer: "নির্দিষ্ট শর্ত পূরণকারী উপাদান বের করা"
  },
  {
    question: "Destructuring দিয়ে কোন ধরণের ডাটা সহজে ডিকনস্ট্রাকচার করা যায়?",
    options: [
      "অবজেক্ট ও অ্যারে",
      "কেবল অবজেক্ট",
      "কেবল অ্যারে",
      "কোনওটি নয়"
    ],
    answer: "অবজেক্ট ও অ্যারে"
  },
  {
    question: "Spread operator-এর মাধ্যমে কি করা যায়?",
    options: [
      "অবজেক্ট/অ্যারে ক্লোন ও মিশ্রণ করা",
      "অ্যারে ফিল্টার করা",
      "অবজেক্ট ডিলিট করা",
      "কোনওটি নয়"
    ],
    answer: "অবজেক্ট/অ্যারে ক্লোন ও মিশ্রণ করা"
  }
];


// ৯. Advanced Concepts – ক্লোজার, প্রোটোটাইপ, প্রমিস, ইত্যাদি উন্নত বিষয়
export const jsAdvancedQuiz = [
  {
    question: "Closure কী?",
    options: [
      "একটি ফাংশনের ভিতরে ডিফাইন করা ফাংশন যা বাহ্যিক ভ্যারিয়েবল অ্যাক্সেস করে",
      "এক ধরনের অবজেক্ট",
      "অ্যাসিঙ্ক্রোনাস অপারেশন",
      "ফাংশন হোস্টিং"
    ],
    answer: "একটি ফাংশনের ভিতরে ডিফাইন করা ফাংশন যা বাহ্যিক ভ্যারিয়েবল অ্যাক্সেস করে"
  },
  {
    question: "Prototypal inheritance এর মাধ্যমে কী অর্জিত হয়?",
    options: [
      "অবজেক্টের বৈশিষ্ট্য ও পদ্ধতি উত্তরাধিকারসূত্রে গ্রহণ",
      "নতুন ফাংশন তৈরি",
      "ভ্যারিয়েবল রিসেট",
      "DOM আপডেট"
    ],
    answer: "অবজেক্টের বৈশিষ্ট্য ও পদ্ধতি উত্তরাধিকারসূত্রে গ্রহণ"
  },
  {
    question: "IIFE তে কেন অনেক ক্ষেত্রে closure ব্যবহার করা হয়?",
    options: [
      "বহিঃস্থ স্কোপ থেকে ডাটা রক্ষা করতে",
      "কোড দ্রুততর করতে",
      "ভ্যারিয়েবল সংখ্যা কমাতে",
      "ডাটা স্টোর করতে"
    ],
    answer: "বহিঃস্থ স্কোপ থেকে ডাটা রক্ষা করতে"
  },
  {
    question: "Currying এর মাধ্যমে কী করা হয়?",
    options: [
      "একটি ফাংশনকে আর্গুমেন্ট ভিত্তিক ছোট ফাংশনে পরিবর্তন করা",
      "বহু ফাংশন একত্র করা",
      "ডাটা ফিল্টার করা",
      "কোনওটি নয়"
    ],
    answer: "একটি ফাংশনকে আর্গুমেন্ট ভিত্তিক ছোট ফাংশনে পরিবর্তন করা"
  },
  {
    question: "Function memoization এর সুবিধা কী?",
    options: [
      "ক্যালকুলেশন পুনরায় ব্যবহার করা",
      "নতুন ফাংশন তৈরি",
      "সিঙ্ক্রোনাস অপারেশন",
      "ইভেন্ট হ্যান্ডলিং"
    ],
    answer: "ক্যালকুলেশন পুনরায় ব্যবহার করা"
  },
  {
    question: "Call(), apply() ও bind() মেথডের কার্যকারিতা কী?",
    options: [
      "this context নিয়ন্ত্রণ ও ফাংশন invocation",
      "ভ্যারিয়েবল ডিক্লেয়ার",
      "অ্যাসিঙ্ক্রোনাস অপারেশন",
      "কোনওটাই"
    ],
    answer: "this context নিয়ন্ত্রণ ও ফাংশন invocation"
  },
  {
    question: "Strict mode কী কাজে লাগে?",
    options: [
      "কোডে সতর্কতা যোগ করে এবং ভুল ধরতে সহায়তা করে",
      "কোড দ্রুত করে",
      "DOM আপডেট করে",
      "ভ্যারিয়েবল ডিলিট করে"
    ],
    answer: "কোডে সতর্কতা যোগ করে এবং ভুল ধরতে সহায়তা করে"
  },
  {
    question: "Event loop ও call stack এর সম্পর্ক কী?",
    options: [
      "ইভেন্ট লুপ call stack থেকে আউটসোর্সড",
      "call stack ইভেন্ট লুপের উপর ভিত্তি করে",
      "call stack ও event loop একে অপরকে নিয়ন্ত্রণ করে",
      "কোনও সম্পর্ক নেই"
    ],
    answer: "call stack ও event loop একে অপরকে নিয়ন্ত্রণ করে"
  },
  {
    question: "Garbage collection কীভাবে কাজ করে?",
    options: [
      "অপ্রয়োজনীয় মেমোরি ফাঁকা করে",
      "ডাটা স্টোর করে",
      "ফাংশন কল করে",
      "ডাটা আপডেট করে"
    ],
    answer: "অপ্রয়োজনীয় মেমোরি ফাঁকা করে"
  },
  {
    question: "Decorator pattern এ কী মূলত করা হয়?",
    options: [
      "একটি ফাংশন বা অবজেক্টের আচরণ ডায়নামিকভাবে পরিবর্তন করা",
      "নতুন ফাংশন তৈরি",
      "কোড এনক্রিপশন",
      "ভ্যারিয়েবল রিসেট"
    ],
    answer: "একটি ফাংশন বা অবজেক্টের আচরণ ডায়নামিকভাবে পরিবর্তন করা"
  }
];


// ১০. Interview Questions – ইন্টারভিউ-লেভেলের মধ্যবর্তী ও উন্নত প্রশ্ন
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
      "A method for object cloning",
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
      "Functions that do not have side effects and return the same output for same input",
      "Functions that modify global state",
      "Functions that use async/await",
      "Functions that rely on external data"
    ],
    answer: "Functions that do not have side effects and return the same output for same input"
  },
  {
    question: "Explain the concept of 'this' in JavaScript.",
    options: [
      "It refers to the context in which a function is executed",
      "It is always equal to window",
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
      "A method to loop through arrays",
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

// alert("hello class");

// var now = new Date();

// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());
// console.log(now.getMilliseconds());

// console.log(now.slice(0, 3));

// console.log(now.toString().slice(0, 3));

// var now = new Date().getDay();
// console.log(now);

// var now = new Date().getTime();
// console.log(now);

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// var now = new Date().getDay();
// console.log(now);

// console.log(dayNames[now]);

// var now = new Date("25 dec 2008");

// console.log(now);

// var today = new Date();
// var futureDate = new Date("May 9 , 2023");

// var msToday = today.getTime();
// var msFuture = futureDate.getTime();

// console.log(msToday);
// console.log(msFuture);

// var msDiff = msFuture - msToday;

// console.log(msDiff);

// var diff = msDiff / (1000 * 60 * 60 * 24);

// console.log(Math.ceil(diff));

// function   function_name ()  {
// //
// }

// alert("hello");

// function greet() {
//   var firstName = "Jaffar";
//   var lastName = "Aman";
//   var fullName = firstName + " " + lastName;
//   alert(fullName);
// }
// greet();

// function foo() {
//   alert("hello ");
// }

// foo();
// foo();
// foo();
// foo();
// foo();
// foo();
// foo();
// foo();

// function tellTime() {
//   var now = new Date().toTimeString();
//   alert(now);
// }

// tellTime();
// tellTime();

// function greet(username) {
//   alert("HELLO" + username);
// }

// greet("salman");
// greet("jaffar");

// function sum(num1 = 0, num2 = 0, num3 = 0) {
//   console.log(num3);
//   console.log(num1 + num2 + num3);
// }

// sum(20, 50);

function foo(message = "hello") {
  alert(message);
}
foo("world");

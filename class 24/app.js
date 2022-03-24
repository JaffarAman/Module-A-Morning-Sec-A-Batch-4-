// var userName = prompt("Enter your name...");

// document.write("<h1>HELLO " +  userName +  "</h1>");

// var age = +prompt("enter your age");
// var gender = prompt("enter your gender");

// if (age >= 20 &&   (gender === "male" || gender === "female")) {
//   console.log("ALLOW");
// } else {
//   console.log("not allow");
// }

///ARRAYS//

// [  ]  =>array bracket

// var fruits = ["apple", "mango", "orange"];

// console.log(fruits[0], fruits[1], fruits[2]);

// var userName = undefined;
// userName = "jaffar aman"
// console.log(userName);

// var arr = [];
// arr[0] = "Jaffar";
// arr[1] = "Aman";

// console.log(arr);

// // arr length 2
// console.log(arr[1]);

// var arr = ["JAFFAR"];
// arr[1] = "Aman";
// arr[5] = "Talha";
// console.log(arr[4]);

// pakistan cities//

// var city1 = "karachi";
// var city2 = "Lahore";
// var city3 = "Multan";
// var city4 = "Islamabad";

// var cities = ["karachi", "Lahore", "Multan", "Islamabad"];

// document.write("My city name is" + " " + cities[3]);

// ADDING AND REMOVING ELEMENTS  (ARRAY METHOD'S)//
// var cities = ["karachi", "Lahore", "Multan", "Islamabad"];
// console.log("old array", cities);

// LAST INDEX METHOD's POP & PUSH///

// cities.pop();

// // cities.push("pindi", "hunza", "delhi");

// console.log("new array", cities);

//// STARTING INDEX METHOD'S  SHIFT && UNSHIFT////

// cities.shift();
// cities.unshift("quetta" , "pindi");
// console.log("new array", cities);

// slice && splice //

// var cities = ["karachi", "Lahore", "Multan", "Islamabad"];
// console.log("old array", cities);

// var arrCopy = cities.slice(0, 2);
// var arrCopy = cities.slice(1, 0);

// console.log(arrCopy, "array copy kara hai");

// splice  //
// var cities = ["karachi", "lahore", "multan", "Islamabad" , "jaffar" , "aman"];
// console.log("old array", cities);

// // cities.splice(1, 2);
// // console.log("new array", cities);

// console.log(cities.slice(-2));

///chat 9 to 11
// question 5

// var a = 4;
// if (++a === 5) {
//   alert("given condition for variable a is true");
// }
// ans=> true

// var b = 82;
// if (b++ === 83) {
//   alert("given condition for variable b is true");
// }

// ans = > false

// question 7

// var secretNum = 5;
// var userNum = +prompt("Enter Secret number 1 to 10:");

// if (userNum === secretNum) {
//   alert("Bingo! Correct answer");
// } else if (userNum === ++secretNum) {
//   alert("Close enough to the correct answer.");
// } else {
//   alert("next time");
// }

// question 8//

// var userNum = +prompt("enter any number");

// if (userNum % 3 === 0) {
//   alert("divisible by 3");
// } else {
//   alert("not divisible by 3");
// }

// question 9//

// var userNum = +prompt("enter any number");

// if (userNum % 2 === 0) {
//   alert("even number ");
// } else {
//   alert("odd number");
// }

// var value = "A";

// if (value.charCodeAt === 65) {
//   console.log("CAPITAL A");
// }

// var arr = ["jafar", "aman"];
// console.log(arr.length);

var number;
document.write("Value after variable declaration is:" + number + "<br />");
number = 5;

document.write("Initial value:" + number);

document.write("<table border='1'>")
document.write("<tr><td>"+ number +" </td></tr>")
document.write("</table>")

// console.log("HELLO CLASS");

// var name = "jaffar";
// name += " aman";
// console.log(name);

// var i = 1;
// // i+2;

// i = i + 10;
// i += 1

// console.log(i);

// for (var i = 1; i <= 10; i++) {
//   console.log(i);
// }

//odd
// for (var i = 1; i <= 10; i = i + 2) {
//   console.log(i);
// }

//even
// for (var i = 2; i <= 10; i = i + 2) {
//   console.log(i);
// }

// 10 to 1

// for (var i = 10; i >= 1; i--) {
//   console.log(i);
// }

// var userCity = prompt("enter city");

// var cities = ["lahore", "multan", "karachi", "islamabad"];

// if (userCity == cities[0]) {
//   alert("welcome");
// } else if (userCity === cities[1]) {
//   alert("welcome");
// } else if (userCity === cities[2]) {
//   alert("welcome");
//   console.log("11111111");
// } else if (userCity === cities[3]) {
//   alert("welcome");
// }

// flag
// var isMatch = false;

// for (var i = 0; i < cities.length; i++) {
//   if (userCity === cities[i]) {
//     alert("WELCOME");
//     isMatch = true;
//     break;
//   }
// }

// if (isMatch === false) {
//   alert("not match");
// }

// nested loop

// for (var i = 0; i < 5; i++) {
//   console.log(i, "i");

//     for (var j = 0; j < 5; j++) {
//         console.log(j, "j");
//     }

// }

// var arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6, 7, 8],
// ];

// for (var row = 0; row < arr.length; row++) {
//   for (var col = 0; col < arr[row].length; col++) {
//     console.log(arr[row][col]);
//   }
// }

// for (var row = 0; row < arr.length; row++) {

//   for (var col = 0; col < arr[row].length; col++) {
//     console.log(arr[row][col]);
//   }
// }

// var arr = []

// var arr = new Array(5);
// arr[0]= ajsdhkjas
// arr[1] = 514
// arr[2]
// console.log(arr);

var stdName = ["jaffar", "talha", "yousuf"];
var stdScore = [320, 230, 480];

var per1 = (stdScore[0] / 500) * 100;
var per2 = (stdScore[1] / 500) * 100;
var per3 = (stdScore[2] / 500) * 100;

document.write("score of" + stdName[0] + "is" + stdScore[0] + "per:" + per1);

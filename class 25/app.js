// console.log("hello world");

// Arrays..

// var arr = ["Jaffar", 20, true, undefined, null];
// arr[6] = "yousuf";
// arr[6] = "talha";

// console.log(arr[6]);

// var cities = ["karachi", "lahore", "multan", "Islamabad"];

// arr.pop();
// arr.push("abc", "xyz");

// arr.shift();
// arr.unshift("abc", "xyz");
// console.log(arr);

// var arrCopy = cities.slice(0, -1);
// console.log(arrCopy);

// console.log(cities);

// cities.splice(1, 2, "abcd", "jaffar");
// console.log(cities);

// document.write(1 + "<br />");
// document.write(2 + "<br />");
// document.write(3 + "<br />");
// document.write(4 + "<br />");
// document.write(5 + "<br />");
// document.write(6 + "<br />");
// document.write(7 + "<br />");
// document.write(8 + "<br />");
// document.write(9 + "<br />");
// document.write(10 + "<br />");

// /for loop//

// for ( initialization , condition , increment / decrement   )  {

// }

// initialization ==>> var  i =0
// condition  ==> comparsion
// increment/decreament  i++ , ++i , --i ,i--

// for (var i = 0; i < 100; i++) {
//   document.write(i + "<br />");
// }

// for (var i = 11; i <= 10; i++) {
//   console.log(i);
// }

// document.write("2 x 1 = " + 2 * 1 + "<br />");
// document.write("2 x 2 = " + 2 * 2 + "<br />");
// document.write("2 x 3 = " + 2 * 3 + "<br />");
// document.write("2 x 4 = " + 2 * 4 + "<br />");
// document.write("2 x 5 = " + 2 * 5 + "<br />");

// for (var i = 1; i <= 100; i++) {
//   document.write("5 x " + i + " = " + 5 * i + "<br />");
// }

// var tableNumber = +prompt("enter table number");
// var tableLength = +prompt("enter table Length");

// if (tableNumber) {
//   tableNumber = tableNumber;
// } else {
//   tableNumber = 5;
// }

// if (tableLength) {
//   tableLength = tableLength;
// } else {
//   tableLength = 10;
// }

// for (var i = 1; i <= tableLength; i++) {
//   document.write(
//     tableNumber + " " + "x" + " " + i + " = " + tableNumber * i + "<br />"
//   );
// }

//for loop///

// for (var i = 1; i < 10; i = i + 2) {
//   console.log(i);
// }

// for (var i = 10; i >= 1; i--) {
//   console.log("umair");
//   document.write("umair <br>")
// }

var citiesArr = ["lahore", "karachi", "multan", "islamabad"];
// console.log(citiesArr[0])
// console.log(citiesArr[1])
// console.log(citiesArr[2])
// console.log(citiesArr[3])

// console.log(citiesArr.length);

// for (var i = 0; i < citiesArr.length; i++) {
//   console.log(citiesArr[i]);
//   document.write(citiesArr[i] + "<br />");
// }

// for (var i = citiesArr.length - 1; i >= 0; i--) {
//   console.log(citiesArr[i]);
//   document.write(citiesArr[i] + "<br />");
// }

var userCity = prompt("enter city name");
// if(userCity === citiesArr[0] )
// {
//     console.log("welcome to karachi")
// }else if (userCity === citiesArr[1]){
//     console.log("welcome to karachi")

// }

for (var i = 0; i < citiesArr.length; i++) {
  console.log(citiesArr[i]);
  if (userCity === citiesArr[i]) {
    alert("welcome");
  }
}

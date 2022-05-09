// // console.log("hello world");

// var name = "jaffar aman";

// // console.log(name.length);

// var length = 0;
// for (var i = 0; true; i++) {
//   if (!name[i]) {
//     break;
//   }
//   length++;
// }

// console.log(length);

// if (!"j") {
//   console.log("1111111");
// }

// var value = 35.36;
// var arr = String(value).split(".");
// var newStr = arr.join("");
// console.log(newStr);

// var username = prompt("enter your username");

// var flag = false;

// for (var i = 0; i < username.length; i++) {
//   if (
//     username[i].charCodeAt() == 33 ||
//     username[i].charCodeAt() == 44 ||
//     username[i].charCodeAt() == 46 ||
//     username[i].charCodeAt() == 64
//   ) {
//     flag = true;
//     console.log("invalid username");
//   }
// }

// // if (flag) {
// //   console.log("invalid username");
// // } else {
// //   console.log("valid user name+");
// // }
// if (flag === false) {
//   console.log("valid user name");
// }

// var num = +prompt("enter positive integer");
// // if (num < 0) {
// //   alert("enter valid number");
// // } else {
// //   ///
// //   document.write("hello");
// // }

// document.write(Math.abs(num));

// var randomNum = Math.floor(Math.random() * 100 + 1);
// console.log(randomNum);

// if (randomNum == 1) {
//   //tails
// } else {
//   //head
// }
// var arr = ["sun", "mon" , "tue", "wed", "thur", "fri", "sat"]

var now = new Date()
// var day = now.getDay()
// var newArr = arr[day]



// // var  month  = now.getSeconds()
// var date = String(now).slice(16,24)
// var  findInd = date.indexOf("0")
// console.log(findInd)
// console.log( date )


var hours = now.getHours()
console.log(hours)

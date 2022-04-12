// var cities = ["karachi", "lahore", "islamabad", "multan"];

// var userCity = prompt("enter your city");
// console.log(userCity.toLowerCase())

// var isMatch = false;

// for (var i = 0; i < cities.length; i++) {
//   console.log(cities[i]);
//   if (userCity.toLowerCase() === cities[i]) {
//     isMatch = true;
//     alert("welcome");
//     break;
//   }
// }

// if (isMatch === false) {
//   alert("not found");
// }

// var string = "jaf         far.";

// console.log(string.length);

// var string = "pakistan";
// var string = prompt("enter name");

// // var firstLetter = string.slice(0, 1).toUpperCase();
// // var otherWords = string.slice(1).toLowerCase();

// // var cap = firstLetter + otherWords;

// string = string.slice(0, 1).toUpperCase() + string.slice(1).toLowerCase();

// console.log(string);

// var myName = prompt("enter name");
// if (myName.length >= 3) {
//   alert("valid");
// } else {
//   alert("invalid name");
// }

//index of
// var string = "Jaffar AmaN";
// // var indexNumber = string.lastIndexOf("a");
// var indexNumber = string.indexOf("AmaN");
// console.log(indexNumber);

// var string =
//   "The New Yorker magazine doesn't allow the phrase World War II.  They say it shouldbe the Second World War.";

// for (var i = 0; i < string.length; i++) {
//   if (string.slice(i, i + 12) == "World War II") {
//     console.log(i);
//     string = string.slice(0, i) + "the Second World War" + string.slice(i + 12);
//   }
// }

// console.log(string);



// var myName = "Yousuf Islam"
// console.log(myName.indexOf("usu"));
// console.log(myName.charAt(myName.length-1))


// var userEmail = prompt("Enter your email")
// var flag = 0
// for (var i = 0; i < userEmail.length; i++) {
//     if (userEmail.charAt(i) == "@") {
//         alert("Your Email is valid")
//         flag = 1
//         break
//     }
// }
// if(flag === 0) {
//     alert("Your Email is not Valid")
// }


// var string =
//   "The New Yorker magazine doesn't allow the phrase World War II.  They say it should be the Second World War.";

// var modifiedString = string.replace("World War II", "Second World War")
// console.log("Old String =>", string)
// console.log("New String =>", modifiedString);

// var newString = modifiedString.replace(/Second World War/g, "World War II")
// var newString = modifiedString.replace(/the/g, "a")
// console.log(newString)




// var num = 1.9999999999
// var roundOff = Math.round(num)
// console.log(roundOff)

// var ceilNum = Math.ceil(num)
// console.log(ceilNum);

// var floorNum = Math.floor(num)
// console.log(floorNum);
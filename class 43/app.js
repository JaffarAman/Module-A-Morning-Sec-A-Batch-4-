// var age = 30;
// if (age > 20 && age <25) {
//   console.log("allow");
// } else {
//   console.log("not allow");
// }

// switch (age) {
//   case 20:
//     console.log("allow");
//     break;
//   case 25:
//     console.log("allow");
//     break;
//   default:
//     console.log("not allow");
//     break;
// }

// var num1 = +prompt("enter number 1");
// var num2 = +prompt("enter number 2");
// var opt = prompt("enter opt");
// var ans;

// switch (opt) {
//   case "+":
//     ans = num1 + num2;
//     break;
//   case "-":
//     ans = num1 - num2;
//     break;

//   case "*":
//     ans = num1 * num2;
//     break;

//   case "/":
//     ans = num1 / num2;
//     break;
//   default:
//     alert("invalid opt");
// }

// console.log(ans);
// var i = 0
// for (i; i < 10; i++) {
//   console.log(i);
// }

// var i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// var i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i > 10);

var modalImg = document.getElementById("modalImg");
var modalProductName = document.getElementById("modalProductName");
var modalProductDetails = document.getElementById("modalProductDetails");

function openModal(img, prodName) {
  console.log("helloo");
  modalImg.src = img;
  modalProductName.innerHTML = prodName;
}

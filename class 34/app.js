// function bgColors() {
//   var container = document.getElementById("container");
//   var bgColorName = prompt("Enter Background Color");
//   container.style.backgroundColor = bgColorName;
// }

// function textColors() {
//   var heading = document.getElementById("heading");
//   var para = document.getElementById("para");
//   var textColor = prompt("Enter TEXT Color");
//   heading.style.color = textColor;
//   para.style.color = textColor;
// }

// function imgHandler(condition) {
//   var img = document.getElementById("img");
//   console.log(condition);
//   if (condition == "show") {
//     img.style.display = "block";
//   } else if (condition == "hide") {
//     img.style.display = "none";
//   } else if (condition == "small") {
//     img.style.width = "200px";
//     img.style.height = "200px";
//   } else if (condition == "large") {
//     img.style.width = "400px";
//     img.style.height = "400px";
//   } else {
//     return;
//   }
// }

// function imgChange(toggle, e) {
//   console.log("helllloo", toggle, e);
//   if (toggle == "on") {
//     e.src = "bulbOn.jpg";
//   } else {
//     e.src = "bulbOff.jpg";
//   }
// }

// function foo() {
//   var para1 = document.getElementById("para1");
//   console.log(para1.id);

//   para1.className += " para";
// }

///get elements by tag names

// var allPara = document.getElementsByTagName("p");
// console.log(allPara);
// console.log((allPara[0].style.backgroundColor = "red"));
// console.log((allPara[1].style.backgroundColor = "red"));
// console.log((allPara[2].style.backgroundColor = "red"));
// console.log((allPara[3].style.backgroundColor = "red"));

// for (var i = 0; i < allPara.length; i++) {
//   allPara[i].style.background = "blue";
// }

// var parent = document.getElementById("parent");
// console.log(parent);

// var childs = parent.getElementsByTagName("p");
// console.log(childs[0].style.color = "red");

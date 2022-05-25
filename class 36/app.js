// console.log(document.childNodes[1].childNodes[2].childNodes[1].innerHTML);

// var para = document.getElementById("para");
// console.log(para.childNodes[0].nodeValue);

// var parent = document.getElementById("parent");
// console.log(parent.childNodes.length);

// var li = document.getElementsByTagName("li");
// var classList = document.querySelector(".list")
// var allClassList = document.querySelectorAll(".list")

// console.log(classList)

// getElementsByClassName
// getElementsByTagName
// getElementById

// var btn = document.querySelector("button");
// // btn.style.color = "red";

// // var attrCheck = btn.hasAttribute("id");
// // var attrValue = btn.getAttribute("class");
// // var setAttr = btn.setAttribute("id", "btnId");
// // console.log(attrCheck);
// // console.log(attrValue);
// console.log(btn.attributes);

var box = document.getElementById("box");
var h1 = document.createElement("h1");
// var h1Text = document.createTextNode("HELLO WORLD");

// h1.appendChild(h1Text);
h1.innerHTML = prompt("enter name");
box.appendChild(h1);

console.log(h1);
console.log(box);

h1.setAttribute("onclick", "foo(this)");

function foo(e) {
  console.log("helllloooo" , e);
}

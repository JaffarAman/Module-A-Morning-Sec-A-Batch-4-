var para =
  "The New Yorker magazine doesn't allow the phrase World War II. They say it should be World War II.";

console.log(para);

// for (var i = 0; i < para.length; i++) {
//   if (para.slice(i, i + 12) == "World War II") {
//     console.log(i);
//     para = para.slice(0, i) + "the Second World War" + para.slice(i + 12);
//   }
// }

// console.log(para)

// var indNum = para.indexOf("World War II");
// console.log(indNum);

// para = para.slice(0, indNum) + "the Second World War" + para.slice(indNum + 12);

// console.log(para);

// para = para.replace("World War II", "the Second World War");
// para = para.replace(/World War II/g, "the Second World War");

// console.log(para);

// var name = "jaffar";
// var char = name.charAt(2);
// console.log(char);
// console.log(name.charCodeAt(0))

// var username = prompt("enter name");
// console.log(username.slice(-1));

///MATH
// round()
// floor()
// ceil()

// var number = -32.5;
// // var number = 0.000000009;

// console.log(number);

// // var roundValue = Math.round(number);

// // var floor = Math.floor(number);

// var ceil = Math.ceil(number);
// console.log(ceil);

// var random = Math.floor(Math.random() * 2 + 1);

// var random = Math.floor(Math.random() * 6 + 1);
// console.log(random);

// var num = "25.215 454";
// var numfloot = parseFloat(num);
// console.log(numfloot);
// console.log(num + num);

// num to string

// var num = 2500;
// console.log(String(num));

var num = 251.22456321465;

console.log(num.toFixed(3));

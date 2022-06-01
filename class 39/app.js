// console.log()

// var fruits = ["apple" , "mango"]

// console.log(fruits)

///o

// var date = new Date()
// console.log(typeof date)

// var arr = ["jaffar", 21];
// console.log(arr);

// var obj = {
//   name: "jaffar",
//   age: 21,
// };
// console.log(obj);

// console.log("name", obj.name);
// console.log("age", obj.age);

// var obj = {
//   userName: "Jaffar",
//   age: 21,
//   gender: "male",
//   userName: "Jaffar Aman",
// };
// console.log(obj.userName);

// // var newObj = new Object();

// var newObj = {};

// newObj.name = "Jaffar";
// newObj.age = 21;

// console.log(newObj);

// var obj = {
//   name: "Jaffar Aman",
// };
// var arr = [1,2,3]
// console.log(arr)

///1st dot notation
// console.log(obj.name);

//2nd array notation
// console.log(obj["name"]);

// var obj = {
//   name: "Jaffar Aman",
//   age: 21,
// };

//check prop
// var check = "age" in obj;
// console.log(check);

// console.log(obj);
// delete prop
// delete obj.age;
// delete obj.name;
// obj = {}
// console.log(obj);

var stdObj = {
  name: "Jaffar Aman",
  age: 21,
  gender: "male",
};
// console.log(stdObj."name")

// for (var key in obj) {
//   console.log(key);
// }

// for (var prop in stdObj) {
//   console.log(prop , "==>" , stdObj[prop]);
// }

// var std1Name = "Jaffar";
// var Std1Age = 21;
// var Std1Class = "Web and mobiles";
// var std2Name = "Jaffar";
// var Std2Age = 21;
// var Std2Class = "Web and mobiles";

// var std1 = {
//   name: "Jaffar",
//   age: 21,
//   class: "web and mobile",
// };

// var std1 = {
//   name: "Jaffar",
//   age: 21,
//   subjects: ["html", "css", "javascripts"],
//   address: {
//     city: "Karachi",
//     country: "Pakistan",
//   },
//   result: undefined,
//   rollno: null,
// };
// console.log(std1.subjects[2]);
// console.log(std1.address.country);


var std1 = {
  firstName: "Jaffar",
  lastName: "Aman",
  age: 21,
  subjects: ["html", "css", "javascripts"],
  address: {
    city: "Karachi",
    country: "Pakistan",
  },
  fullName: function () {
    var fullName = this.firstName + " " + this.lastName
    return fullName
  },
};

console.log(std1.fullName());

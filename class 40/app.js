// var std1 = {
//   name: "Talha",
//   class: "Web and  Mobile",
//   subjects: ["html", "Css", "Javascript"],
//   address: {
//     city: "Karachi",
//     country: "Pakistan",
//   },
// };

// console.log(std1.subjects[2]);
// console.log(std1.address.country)
// console.log(std1["name"]);

// for (var key in std1) {
//   console.log(key, " => ", std1[key]);
// }

// for (var props in std1) {
//   console.log(props, std1[props]);
// }

// methods

// var std1FirstName;
// var std1LastName;
// var std1Subject1;

// var std1 = {
//   firstName: "HM",
//   lastName: "Talha",
//   subjects: ["html", "css", "Javascript"],
//   marks: {
//     html: 60,
//     css: 70,
//     javascript: 40,
//   },
//   getFullName: function () {
//     var fullName = this.firstName + " " + this.lastName;
//     return fullName;
//   },
//   getTotalMarks: function () {
//     var totalMarks = this.marks.html + this.marks.css + this.marks.javascript;
//     return totalMarks;
//   },
// };

// var std2 = {
//   firstName: "HM",
//   lastName: "Talha",
//   subjects: ["html", "css", "Javascript"],
//   marks: {
//     html: 60,
//     css: 70,
//     javascript: 40,
//   },
//   getFullName: function () {
//     var fullName = this.firstName + " " + this.lastName;
//     return fullName;
//   },
//   getTotalMarks: function () {
//     var totalMarks = this.marks.html + this.marks.css + this.marks.javascript;
//     return totalMarks;
//   },
// };

// var std3 = {
//   firstName: "HM",
//   lastName: "Talha",
//   subjects: ["html", "css", "Javascript"],
//   marks: {
//     html: 60,
//     css: 70,
//     javascript: 40,
//   },
//   getFullName: function () {
//     var fullName = this.firstName + " " + this.lastName;
//     return fullName;
//   },
//   getTotalMarks: function () {
//     var totalMarks = this.marks.html + this.marks.css + this.marks.javascript;
//     return totalMarks;
//   },
// };

// // console.log(std1.firstName + " " + std1.lastName);
// console.log(std1.getFullName());
// console.log(std1.getTotalMarks());

// function Std(firstName, lastName, subject) {
//       this.firstName = firstName
// }

// function Std(name, age, subject) {
//   this.stdname = name;
//   this.stdAge = age;
//   this.stdSubject = subject;
//   this.getName = function () {
//     // return this.stdname;
//     return "hello"
//   };
// }

// var std1 = new Std("talha", 22, ["web and mobile" , "html" ]);
// var std2 = new Std("jaffar", 21, "web and mobile");
// var std3 = new Std("yousuf", 22, "Web and mobile");
// console.log(std1.getName());
// console.log(std2);
// console.log(std3);

// function Std(firstName, lastName, age , subjects) {
//   this.stdFirstName = firstName;
//   this.stdLastName = lastName;
//   this.stdAge = age;
//   this.subjects = subjects;
//   // this.getFullName = function(){

//   // }
// }

// var std1 = new Std("Jaffar", "Aman", 21 , ["html" , "css"]);
// console.log(std1);

var obj = { agesss: 20 };

var check = obj.hasOwnProperty("age");

console.log(check);

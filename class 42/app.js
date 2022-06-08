// console.log(window);

// alert("hello class")
// window.alert("hello class")

// confirm("hello")

// function pageChange() {
//   console.log(window.location);
//   //   window.location.href = "./about.html";
//   //   window.location.assign("./about.html");
//   //   window.location.replace("./about.html");
// }

// function homePage() {
//   window.location.href = "./index.html";
// }

// function openWindow() {
//   //   window.open("about.html", "window1", "width : 50 ; heigth : 50");
//   window.open("https://www.google.com", "Win1", "width=300,height=300");
// }

function formSubmit() {
  var username = document.getElementById("username");
  //   console.log(username.value.length);
  //   if (username.value.length >= 3) {
  //     window.location.assign("./about.html");
  //   } else {
  //     alert("invalid name");
  //   }
  //   var countries = document.getElementById("countries");
  //   console.log(countries.selectedIndex);
  //   if (countries.selectedIndex === 0) {
  //     alert("select your country");
  //   } else {
  //     window.location.assign("./about.html");
  //   }
  var gender = document.getElementsByName("gender");
  //   console.log(gender[0].value);
  //   console.log(gender[1].value);
  //   console.log(gender[0].checked);
  var flag = false;
  for (var i = 0; i < gender.length; i++) {
    if (gender[i].checked === true) {
      flag = true;
      console.log("next page");
      break;
    }
  }
  if (flag == false) {
    alert("select your gender");
  }
}

var date = new Date();
var year =  date.getFullYear() + " ";
document.getElementById("currentYear").innerHTML = year;

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
// Responsive sidebar navigation
function openNav() {
  document.getElementById("mySidenav").style.width = "200px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.body.style.backgroundColor = "white";
}
// Project Toggling Effects
var p0 = document.getElementById("text0");
var p1 = document.querySelector(".text1");
var p2 = document.querySelector(".text2");
var p3 = document.querySelector(".text3");
var td0 = document.querySelectorAll(".td0");
var td1 = document.querySelectorAll(".td1");
var td2 = document.querySelectorAll(".td2");
var td3 = document.querySelectorAll(".td3");
var btn0 = document.getElementsByClassName("btn0");
var btn1 = document.getElementsByClassName("btn1");
var btn2 = document.getElementsByClassName("btn2");
var btn3 = document.getElementsByClassName("btn3");

toggleActive0(btn0, p0, td0);
toggleActive1(btn1, p1, td1);
toggleActive2(btn2, p2, td2);
toggleActive3(btn3, p3, td3);

// Toggling Buttons
// Brute Force Lol ;)
function toggleActive0(btn, p, td) {
  for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
      for (var j = 0; j < btn.length; j++) {
        btn[j].classList.remove("btn-active");
      }
      this.classList.add("btn-active");
      if (this.innerText == "5 Marla") {
        p.innerText =
          "Rudn Enclave offering 5 Marla having total area of (25×50) residential plots at very addordable price. Booking starting from 20% downpayment, 48 monthly installments, and 10% possession. Contact us for booking and details, if you have any budget issues feel free to visit our office for flexible payment options.";
        td[0].innerText = "5 Marla";
        td[1].innerText = "1,200,000";
        td[2].innerText = "240,000";
        td[3].innerText = "17,500";
        td[4].innerText = "1,20,000";
      } else if (this.innerText == "7 Marla") {
        p.innerText =
          "Rudn Enclave offering 7 Marla having total area of (30×60) residential plots at very addordable price. Booking starting from 20% downpayment, 48 monthly installments, and 10% possession. Contact us for booking and details, if you have any budget issues feel free to visit our office for flexible payment options.";
        td[0].innerText = "7 Marla";
        td[1].innerText = "1,560,000";
        td[2].innerText = "312,000";
        td[3].innerText = "17,500";
        td[4].innerText = "1,20,000";
      } else if (this.innerText == "10 Marla") {
        p.innerText =
          "Rudn Enclave offering 10 Kanal having total area of (35×70) residential plots at very addordable price. Booking starting from 20% downpayment, 48 monthly installments, and 10% possession. Contact us for booking and details, if you have any budget issues feel free to visit our office for flexible payment options.";
        td[0].innerText = "10 Marla";
        td[1].innerText = "2,160,000";
        td[2].innerText = "433,000";
        td[3].innerText = "31,573";
        td[4].innerText = "	216,500";
      } else if (this.innerText == "1 Kanal") {
        p.innerText =
          "Rudn Enclave offering 1 Kanal having total area of (50x90) residential plots at very addordable price. Booking starting from 20% downpayment, 48 monthly installments, and 10% possession. Contact us for booking and details, if you have any budget issues feel free to visit our office for flexible payment options.";
        td[0].innerText = "1 Kanal";
        td[1].innerText = "3,528,000";
        td[2].innerText = "705,600";
        td[3].innerText = "51,450";
        td[4].innerText = "352,800";
      }
    });
    // get text of clicked button text content
  }
}
// Toogle 1
function toggleActive1(btn, p, td) {
  for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
      for (var j = 0; j < btn.length; j++) {
        btn[j].classList.remove("btn-active");
      }
      this.classList.add("btn-active");
      if (this.innerText == "4 Kanal") {
        p.innerText =
          "Rudn Enclave offering 4 Kanal having total area of (100×200) residential plots at very addordable price. Booking starting from 20% downpayment, 48 monthly installments, and 10% possession. Contact us for booking and details, if you have any budget issues feel free to visit our office for flexible payment options.";
        td[0].innerText = "4 Kanal";
        td[1].innerText = "9,200,000";
        td[2].innerText = "1,840,000";
        td[3].innerText = "134,167";
        td[4].innerText = "920,000";
      } else if (this.innerText == "8 Kanal") {
        p.innerText =
          "Rudn Enclave offering 8 Kanal having total area of (160×250) residential plots at very addordable price. Booking starting from 20% downpayment, 48 monthly installments, and 10% possession. Contact us for booking and details, if you have any budget issues feel free to visit our office for flexible payment options.";
        td[0].innerText = "8 Kanal";
        td[1].innerText = "16,000,000";
        td[2].innerText = "3,200,000";
        td[3].innerText = "233,333";
        td[4].innerText = "1,600.000";
      }
    });
  }
}
// toggle 2
function toggleActive2(btn, p, td) {
  for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
      for (var j = 0; j < btn.length; j++) {
        btn[j].classList.remove("btn-active");
      }
      this.classList.add("btn-active");
      if (this.innerText == "7 Marla") {
        p.innerText =
          "Rudn Enclave offering 7 Marla having total area of (30×60) residential plots at very addordable price. Booking starting from 20% downpayment, 48 monthly installments, and 10% possession. Contact us for booking and details, if you have any budget issues feel free to visit our office for flexible payment options.";
        td[0].innerText = "7 Marla";
        td[1].innerText = "1,800,000";
        td[2].innerText = "360,000";
        td[3].innerText = "26,500";
        td[4].innerText = "1,80,000";
      } else if (this.innerText == "10 Marla") {
        p.innerText =
          "Rudn Enclave offering 10 Marla having total area of (35×70) residential plots at very addordable price. Booking starting from 20% downpayment, 48 monthly installments, and 10% possession. Contact us for booking and details, if you have any budget issues feel free to visit our office for flexible payment options.";
        td[0].innerText = "10 Marla";
        td[1].innerText = "2,370,000";
        td[2].innerText = "474,000";
        td[3].innerText = "34,563";
        td[4].innerText = "	237,000";
      } else if (this.innerText == "1 Kanal") {
        p.innerText =
          "Rudn Enclave offering 1 Kanal having total area of (50x90) residential plots at very addordable price. Booking starting from 20% downpayment, 48 monthly installments, and 10% possession. Contact us for booking and details, if you have any budget issues feel free to visit our office for flexible payment options.";
        td[0].innerText = "1 Kanal";
        td[1].innerText = "3,950,000";
        td[2].innerText = "790,000";
        td[3].innerText = "57,604";
        td[4].innerText = "395,000";
      }
    });
  }
}
// toggle 3
function toggleActive3(btn, p, td) {
  for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
      for (var j = 0; j < btn.length; j++) {
        btn[j].classList.remove("btn-active");
      }
      this.classList.add("btn-active");
      if (this.innerText == "4 Marla") {
        p.innerText =
          "Rudn Enclave offering 4 Marla having total area of (30x35) commercial plots at very addordable price. Booking starting from 20% downpayment, 48 monthly installments, and 10% possession. Contact us for booking and details, if you have any budget issues feel free to visit our office for flexible payment options.";
        td[0].innerText = "4 Marla";
        td[1].innerText = "4,000,000";
        td[2].innerText = "800,000";
        td[3].innerText = "58,300";
        td[4].innerText = "400,000";
      } else if (this.innerText == "8 Marla") {
        p.innerText =
          "Rudn Enclave offering 8 Marla having total area of (40x50) commercial plots at very addordable price. Booking starting from 20% downpayment, 48 monthly installments, and 10% possession. Contact us for booking and details, if you have any budget issues feel free to visit our office for flexible payment options.";
        td[0].innerText = "8 Marla";
        td[1].innerText = "7,200,000";
        td[2].innerText = "1,440,000";
        td[3].innerText = "105,000";
        td[4].innerText = "720,000";
      }
    });
  }
}

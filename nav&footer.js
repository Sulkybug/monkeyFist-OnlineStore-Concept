const navBar = document.getElementById("header");
const textNav = document.querySelectorAll(".nav-link");
const footerText = document.querySelector(".copy");
const itemsCart = document.querySelector(".number-of-items");
const inputArea = document.getElementById("email");
const getStartedBtn = document.getElementById("submit");
const formArea = document.getElementById("form");
const infoSubmit = document.querySelector(".submitInfo");

//Nav bar onscroll

window.onscroll = function () {
  if (window.pageYOffset > 0) {
    navBar.classList.add("nav-scroll-down");
    itemsCart.style.textShadow = "black 2px 0 10px";
    for (let i = 0; i < textNav.length; i++) {
      textNav[i].classList.add("nav-scroll-down-text");
    }
  } else {
    navBar.classList.remove("nav-scroll-down");
    itemsCart.style.textShadow = "none";
    for (let i = 0; i < textNav.length; i++) {
      textNav[i].classList.remove("nav-scroll-down-text");
    }
  }
};

//Auto Year Copyright Section

let time = new Date();
let year = time.getFullYear();

footerText.innerText = `Copyright ${year}, Hanuman Monkey Fist`;

// Email Submit

getStartedBtn.addEventListener("click", (e) => {
  if (inputArea.value != "") {
    e.preventDefault();
    if (ValidateEmail(inputArea) == true) {
      formArea.style.display = "none";
      infoSubmit.style.display = "flex";
    }
  }
});

function ValidateEmail(inputArea) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputArea.value.match(mailformat)) {
    return true;
  } else {
    alert("You have entered an invalid email address!");
    return false;
  }
}

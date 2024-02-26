//hamburger ID
const burgerButton = document.getElementById("burgerButton");
const burgerIcon = document.getElementById("_hamburger");

//Button as container for changTheme
const changeThemeConS = document.getElementById("_changeThemeConS");
const changeThemeConL = document.getElementById("_changeThemeConL");

//changeTheme Icon
const changeThemeS = document.getElementById("_changeThemeS");
const changeThemeL = document.getElementById("_changeThemeL");
const navColor = document.getElementById("_navColor");
const btnLogin = document.getElementById("_btnLogin");

//rotate hamburger when clicked and change to X
burgerButton.addEventListener("click", () => {
  burgerIcon.classList.toggle("fa-bars");
  burgerIcon.classList.toggle("fa-times");
  burgerIcon.style.transform = burgerIcon.classList.contains("fa-times")
    ? "rotate(360deg)"
    : "rotate(0deg)";
});

//hides changeTheme S and L based on scren size
const updateButtonVisibility = () => {
  const win = window;

  changeThemeConS.style.display = win.innerWidth >= 992 ? "none" : "block";
  changeThemeConL.style.display = win.innerWidth >= 992 ? "block" : "none";
};

window.addEventListener("resize", updateButtonVisibility);
updateButtonVisibility();

/*adds removes fa-moon, fa-sun and turns into dark or light
 mode accordingly*/
const toggleTheme = () => {
  changeThemeS.classList.toggle("fa-moon");
  changeThemeS.classList.toggle("fa-sun");
  changeThemeL.classList.toggle("fa-moon");
  changeThemeL.classList.toggle("fa-sun");
  document.body.classList.toggle("bg-dark");
  navColor.classList.toggle("bg-light");
  navColor.classList.toggle("bg-dark");
  navColor.classList.toggle("navbar-light");
  navColor.classList.toggle("navbar-dark");
  btnLogin.style.color = btnLogin.classList.contains("fa-moon")
    ? "#000"
    : "#d8d6d6";
  changeThemeS.style.transform = changeThemeS.classList.contains("fa-moon")
    ? "rotate(360deg)"
    : "rotate(0deg)";
  changeThemeL.style.transform = changeThemeL.classList.contains("fa-moon")
    ? "rotate(0deg)"
    : "rotate(360deg)";
};

changeThemeConS.addEventListener("click", toggleTheme);
changeThemeConL.addEventListener("click", toggleTheme);

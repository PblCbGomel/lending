const themeBtn = document.getElementById("theme-btn");
const main = document.querySelector("main");
const serviceWrapper = document.querySelector(".services-wrapper");
const contancsList = document.querySelector(".contancs-list");

if (
  !localStorage.getItem("infograf-theme") ||
  localStorage.getItem("infograf-theme") === "light"
) {
  localStorage.setItem("infograf-theme", "light");
} else {
  themeBtn.classList.toggle("theme-btn-light");
  themeBtn.classList.toggle("theme-btn-dark");

  main.classList.toggle("dark");
  serviceWrapper.classList.toggle("dark");
  contancsList.classList.toggle("dark");
}

function changeTheme() {
  if (localStorage.getItem("infograf-theme") === "dark") {
    localStorage.setItem("infograf-theme", "light");
  } else {
    localStorage.setItem("infograf-theme", "dark");
  }
  themeBtn.classList.toggle("theme-btn-light");
  themeBtn.classList.toggle("theme-btn-dark");

  main.classList.toggle("dark");
  serviceWrapper.classList.toggle("dark");
  contancsList.classList.toggle("dark");
}

themeBtn.addEventListener("click", changeTheme);

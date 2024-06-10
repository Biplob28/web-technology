const mylinks = document.querySelector(".divlists");
const menu = document.getElementById("hamburger");

let active = true;
menu.addEventListener("click", () => {
  if (active) {
    mylinks.classList.replace("active", "activeNav");
  } else {
    mylinks.classList.replace("activeNav", "active");
  }
  console.log("Mylinks have been toogled");
  active = !active;
});

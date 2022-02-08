const hamburgerMenuIcon = document.getElementById("hamburger-menu-icon");
const closeMenuIcon = document.getElementById("close-menu-icon");
const menuNode = document.querySelector("nav");

const closeMenu = () => {
  console.log("click");
  menuNode.classList.remove("mobile-menu--show");
};

const openMenu = () => {
  console.log("open");
  menuNode.classList.add("mobile-menu--show");
};

hamburgerMenuIcon.addEventListener("click", openMenu);
closeMenuIcon.addEventListener("click", closeMenu);

const iconMenu = document.querySelector(".bx-menu");
const menu = document.querySelector(".menu");

function closeMenu() {
    menu.classList.toggle("menu-show");
}

iconMenu.addEventListener("click", closeMenu);

const contentMenu = document.querySelectorAll(".menu li");

for (const li of contentMenu) {
    li.addEventListener("click", closeMenu);
}

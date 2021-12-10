const menuBtn = document.querySelector(".menu-btn");
const Link = document.querySelector(".links");

menuBtn.addEventListener("click", () => {
    Link.classList.toggle("show-links");
})



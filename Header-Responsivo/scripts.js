const navBtn = document.getElementById("dropdown");
const menuBtn = document.getElementById("menu-btn");

menuBtn.addEventListener("click", () => {

    navBtn.classList.toggle("hide");
    navBtn.classList.toggle("active");

})
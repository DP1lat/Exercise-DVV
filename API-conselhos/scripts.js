const diceBtn = document.querySelector(".dice-btn");

diceBtn.addEventListener("click", () => {
    diceBtn.style.animation = "girar .7s ease";
    diceBtn.style.backgroundColor = "white";

    setTimeout(() => {
        diceBtn.style.animation = "";
        diceBtn.style.backgroundColor = "#FBCE18";
    }, 600);
})
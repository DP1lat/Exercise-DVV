const diceBtn = document.querySelector(".dice-btn");
const BASE_URL = "https://api.adviceslip.com/advice";
const adviceNumber = document.getElementById("advice-number");
const adviceText = document.getElementById("advice-text");

diceBtn.addEventListener("click", async () => {
    diceBtn.style.animation = "girar .7s ease";
    diceBtn.style.backgroundColor = "white";

    await showAdvice();

    setTimeout(() => {
        diceBtn.style.animation = "";
        diceBtn.style.backgroundColor = "#FBCE18";
    }, 600);
});

async function getAdvice() {
    const response = await fetch(BASE_URL)
    const data = await response.json()
    return data.slip
}

async function showAdvice() {
    const advice = await getAdvice();
    adviceNumber.textContent = "#" + advice.id;
    adviceText.textContent = advice.advice;
}

showAdvice();
const submitBtn = document.getElementById("submit-btn");
const cep = document.getElementById("cep");

const BASE_URL = "https://viacep.com.br/ws/01001000/json/"

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    console.log("Cliquei")
})



async function getAdress() {
    const response = await fetch(BASE_URL)
    const data = await response.json()
    console.log(data)
}

getAdress()
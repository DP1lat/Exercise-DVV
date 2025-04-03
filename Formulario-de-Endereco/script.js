const submitBtn = document.getElementById("submit-btn");
const cepInput = document.getElementById("cep");
const streetInput = document.getElementById("street");
const neighborhoodInput = document.getElementById("neighborhood");
const cityInput = document.getElementById("city");
const stateInput = document.getElementById("state");

const BASE_URL = "https://viacep.com.br/ws/"

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const cepValor = cepInput.value;

    console.log(cepValor)

    const url = `${BASE_URL}${cepValor}/json/`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            streetInput.value = data.logradouro;
            neighborhoodInput.value = data.bairro;
            cityInput.value = data.localidade;
            stateInput.value = data.uf;
        })
        .catch(error => {
            console.error("Erro ao buscar o CEP:", error);
        });
})
const taskAdd = document.getElementById("main-container");
const inputTaskAdd = document.getElementById("task-input");
const submitBtn = document.getElementById("submit-btn");
const todoContainer = document.getElementById("todo-container");
const list = document.getElementById("list");

taskAdd.addEventListener("submit", (e) => {
    e.preventDefault();
});

function criarElemento(tag, propriedades = {}, classes = []) {
    let elemento = document.createElement(tag);

    Object.assign(elemento, propriedades);

    if (classes.length) elemento.classList.add(...classes);

    return elemento;
}

function addItem() {
    if (inputTaskAdd.value.trim() === "") {
        alert("Preencha a tarefa antes de adicionar!");
        return;
    }

    let task = criarElemento("li", {}, ["task-container"]);
    let taskDiv = criarElemento("div", {}, ["task-content"]);
    let inputCheck = criarElemento("input", { type: "checkbox" });
    let inputLabel = criarElemento("label", { textContent: inputTaskAdd.value });
    let btnDiv = criarElemento("div", {}, ["btn-content"]);
    let btnDel = criarElemento("button", { id: "delete-btn", textContent: "Deletar" });
    let btnEdit = criarElemento("button", { id: "edit-btn", textContent: "📝" });

    taskDiv.append(inputCheck, inputLabel);
    btnDiv.append(btnDel, btnEdit);
    task.append(taskDiv, btnDiv);
    list.appendChild(task);

    inputTaskAdd.value = "";

    btnDel.addEventListener("click", (e) => {
        e.target.closest("li").remove();
    });

    btnEdit.addEventListener("click", () => {
        let novoTexto = prompt("Editar tarefa:", inputLabel.textContent);
        if (novoTexto) inputLabel.textContent = novoTexto;
    });

    inputCheck.addEventListener("click", () => {
        if (inputCheck.checked) {
            task.style.background = "green";
            inputLabel.style.textDecoration = "line-through"
        } else {
            task.style.background = "";
            inputLabel.style.textDecoration = "none";
        };
    });
};

submitBtn.addEventListener("click", addItem);


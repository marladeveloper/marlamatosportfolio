
const formulario = document.getElementById("formContato");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    if (nome === "" || email === "" || mensagem === "") {
        alert("Preencha todos os campos!");
    } else {
        alert("Obrigado pelo contato, " + nome + "!");

        formulario.reset();
    }
});

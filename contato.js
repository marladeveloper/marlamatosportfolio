
const formulario = document.getElementById("formContato");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;

    alert("Mensagem enviada com sucesso, " + nome + "!");

    formulario.reset();
});

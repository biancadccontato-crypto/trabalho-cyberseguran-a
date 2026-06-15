// Botão formulário de contato
function enviar() {
    alert("Página em construção");
}
// Tema
const botaoTema = document.getElementById("toggle-theme");
const icone = document.getElementById("theme-icon");

botaoTema.addEventListener("click", function() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        icone.textContent = "light_mode";
    } else {
        icone.textContent = "dark_mode";
    }
});

// Acessibilidade
const botaoFonte = document.getElementById("toggle-font");

botaoFonte.addEventListener("click", function() {
    document.body.classList.toggle("large-font");
});
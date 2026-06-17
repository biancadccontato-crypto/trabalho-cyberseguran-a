// Botão formulário de contato
function enviar() {
    alert("Página em construção");
    return false;
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
function abrirSidebar() {
            document.getElementById('sidebar').classList.add('aberta');
            document.getElementById('sidebar-overlay').classList.add('ativo');
}
function fecharSidebar() {
    document.getElementById('sidebar').classList.remove('aberta');
    document.getElementById('sidebar-overlay').classList.remove('ativo');
}
document.addEventListener("DOMContentLoaded", function () {

    // ── TEMA ──
    const botaoTema = document.getElementById("toggle-theme");
    const icone = document.getElementById("theme-icon");

    if (localStorage.getItem("tema") === "dark") {
        document.body.classList.add("dark");
        icone.textContent = "light_mode";
    }

    botaoTema.addEventListener("click", function () {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            icone.textContent = "light_mode";
            localStorage.setItem("tema", "dark");
        } else {
            icone.textContent = "dark_mode";
            localStorage.setItem("tema", "light");
        }
    });

    // ── ACESSIBILIDADE ──
    const botaoFonte = document.getElementById("toggle-font");

    if (localStorage.getItem("fonte") === "grande") {
        document.body.classList.add("large-font");
    }

    botaoFonte.addEventListener("click", function () {
        document.body.classList.toggle("large-font");

        if (document.body.classList.contains("large-font")) {
            localStorage.setItem("fonte", "grande");
        } else {
            localStorage.setItem("fonte", "normal");
        }
    });

    // ── SIDEBAR ──
    function abrirSidebar() {
        document.getElementById('sidebar').classList.add('aberta');
        document.getElementById('sidebar-overlay').classList.add('ativo');
    }

    function fecharSidebar() {
        document.getElementById('sidebar').classList.remove('aberta');
        document.getElementById('sidebar-overlay').classList.remove('ativo');
    }

    window.abrirSidebar = abrirSidebar;
    window.fecharSidebar = fecharSidebar;

    // ── FORMULÁRIO ──
    window.enviar = function () {
        alert("Página em construção");
        return false;
    };

});
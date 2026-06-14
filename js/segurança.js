const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numeros = "0123456789";
const especiais = "!@#$%&*()_+-=[]{}|;:,.<>?";

const todos = letrasMinusculas + letrasMaiusculas + numeros + especiais;

function gerarSenha() {
    const tamanho = parseInt(document.getElementById("tamanho").value);

    if (tamanho < 8 || tamanho > 32) {
        document.getElementById("senha-gerada").textContent = "Digite um tamanho entre 8 e 32.";
        return;
    }

    let senha = "";

    senha += letrasMinusculas[Math.floor(Math.random() * letrasMinusculas.length)];
    senha += letrasMaiusculas[Math.floor(Math.random() * letrasMaiusculas.length)];
    senha += numeros[Math.floor(Math.random() * numeros.length)];
    senha += especiais[Math.floor(Math.random() * especiais.length)];

    for (let i = 4; i < tamanho; i++) {
        senha += todos[Math.floor(Math.random() * todos.length)];
    }

    senha = senha.split("").sort(() => Math.random() - 0.5).join("");

    document.getElementById("senha-gerada").textContent = senha;
}
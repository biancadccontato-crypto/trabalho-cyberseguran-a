const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numeros = "0123456789";
const caracteresEspeciais = "!@#$%^&*()_+-=[]{}|;:,.<>?";

const todosCaracteres = letrasMinusculas + letrasMaiusculas + numeros + caracteresEspeciais;

function gerarSenha() {
    const tamanho = 16;
    let senha = "";

    // Garante pelo menos um de cada tipo
    senha += letrasMinusculas[Math.floor(Math.random() * letrasMinusculas.length)];
    senha += letrasMaiusculas[Math.floor(Math.random() * letrasMaiusculas.length)];
    senha += numeros[Math.floor(Math.random() * numeros.length)];
    senha += caracteresEspeciais[Math.floor(Math.random() * caracteresEspeciais.length)];

    // Preenche o restante aleatoriamente
    for (let i = 4; i < tamanho; i++) {
        senha += todosCaracteres[Math.floor(Math.random() * todosCaracteres.length)];
    }

    // Embaralha para não seguir padrão fixo
    senha = senha.split("").sort(() => Math.random() - 0.5).join("");

    document.getElementById("senha-gerada").textContent = senha;
    document.getElementById("btn-copiar").style.display = "inline-block";
    document.getElementById("aviso-copiado").textContent = "";
}

function copiarSenha() {
    const senha = document.getElementById("senha-gerada").textContent;

    navigator.clipboard.writeText(senha).then(() => {
        document.getElementById("aviso-copiado").textContent = "✓ Senha copiada!";
    });
}
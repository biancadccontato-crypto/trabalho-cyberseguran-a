function enviar() {
    alert("Página em construção");
}
function alternarTema() {
    document.body.classList.toggle("dark");
}
let fonteGrande = false;

function alternarFonte() {
    fonteGrande = !fonteGrande;

    if (fonteGrande) {
        document.body.style.fontSize = "1.4rem";
    } else {
        document.body.style.fontSize = "1rem";
    }
}
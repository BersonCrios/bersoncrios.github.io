function getYarCurent() {
    const anoAtual = new Date().getFullYear();
    document.getElementById('copy').innerHTML = `${anoAtual} © All rights reserved`;
}
function carregar () {


let msg = window.document.getElementById('msg');
let img = window.document.getElementById('imagem');
let data = new Date();
let hora = data.getHours();
let minutos = data.getMinutes();
let segundos = data.getSeconds();
msg.innerHTML = `Agora são:${hora}:${minutos}:${segundos}`

if (hora >= 0 && hora <= 12) {
    //BOM DIA!
    img.src = 'manha.png';
    document.body.style.background = '#e2cd9f'
} else if (hora >= 12 && hora <= 18) {
    //BOA TARDE!
    img.src = 'tarde.png';
    document.body.style.background = '#b9846f'
} else {
    //BOA NOITE!
    img.src = 'noite.png';
    document.body.style.background = '#515154'
}

}

setInterval(carregar, 1000)
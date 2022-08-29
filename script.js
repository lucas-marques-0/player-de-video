let video = document.getElementById("video");
function voltar(){
    video.currentTime -= 15;
}

function diminuir_volume(){
    video.volume -= 0.2;
}

function pause(){
    video.pause();
}

function aumentar_velocidade(){
    video.playbackRate += 0.1;
}

function stop(){
    video.pause();
    video.currentTime = 0;
}

function diminuir_velocidade(){
    video.playbackRate -= 0.1;
}

function play(){
    video.play();
}

function aumentar_volume(){
    video.volume += 0.2;
}

function adiantar(){
    video.currentTime += 15;
}

let container = document.getElementById("container");
let botoes = document.getElementById("controle");
container.addEventListener("mouseover", mostrar);
container.addEventListener("mouseout", esconder);
function mostrar(){
    botoes.style.visibility = "visible";
}
function esconder(){
    botoes.style.visibility = "hidden";
}

// reproductor

const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const iconPlay = document.getElementById("iconPlay");

let isPlaying = false;

// volumen inicial suave
audio.volume = 0.5;

// PLAY / PAUSE
playBtn.addEventListener("click", () => {
    if (isPlaying) {
        audio.pause();
        iconPlay.innerHTML = '<path d="M8 5v14l11-7z" fill="currentColor"/>'; // play
    } else {
        audio.play();
        iconPlay.innerHTML = '<path d="M6 5h4v14H6zm8 0h4v14h-4z" fill="currentColor"/>'; // pause
    }
    isPlaying = !isPlaying;
});

// PROGRESO (si tienes barra)
const progress = document.getElementById("progress");

if(progress){
    audio.addEventListener("timeupdate", () => {
        progress.value = (audio.currentTime / audio.duration) * 100;
    });

    progress.addEventListener("input", () => {
        audio.currentTime = (progress.value / 100) * audio.duration;
    });
}

// CUANDO TERMINA LA CANCIÓN
audio.addEventListener("ended", () => {
    isPlaying = false;
    iconPlay.innerHTML = '<path d="M8 5v14l11-7z" fill="currentColor"/>';
});
// fin reproductor

//countdown
const fechaObjetivo = new Date("May 1, 2026 19:00:00").getTime();

const diasEl = document.getElementById("dias");
const horasEl = document.getElementById("horas");
const minutosEl = document.getElementById("minutos");
const segundosEl = document.getElementById("segundos");

function actualizarContador(){
    const ahora = new Date().getTime();
    const diferencia = fechaObjetivo - ahora;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
    const segundos = Math.floor((diferencia / 1000) % 60);

    diasEl.textContent = dias.toString().padStart(2, '0');
    horasEl.textContent = horas.toString().padStart(2, '0');
    minutosEl.textContent = minutos.toString().padStart(2, '0');
    segundosEl.textContent = segundos.toString().padStart(2, '0');
}

setInterval(actualizarContador, 1000);
actualizarContador();

// animacion
const items = document.querySelectorAll(".color-item");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.3
});

items.forEach(item => observer.observe(item));

//galeria
const fotos = document.querySelectorAll(".galeria-grid img");

const observerGaleria = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

fotos.forEach(foto => observerGaleria.observe(foto));
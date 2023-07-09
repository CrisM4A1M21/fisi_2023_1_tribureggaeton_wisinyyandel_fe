const nav = document.querySelector("#popup");
const pico = document.querySelector("#pico_popup");
const abrir = document.querySelector("#circulo_blanco");
const cerrar = document.querySelector("#circulo_blanco2");
const fondo = document.querySelector("#fondogris");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
    cerrar.classList.add("visible");
    abrir.classList.add("visible");
    pico.classList.add("visible");
    fondo.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
    cerrar.classList.remove("visible");
    abrir.classList.remove("visible");
    pico.classList.remove("visible");
    fondo.classList.remove("visible");
})

fondo.addEventListener("click", () => {
    nav.classList.remove("visible");
    cerrar.classList.remove("visible");
    abrir.classList.remove("visible");
    pico.classList.remove("visible");
    fondo.classList.remove("visible");
})

function redireccion(){
    location.href="SegundaPantalla.html"
}
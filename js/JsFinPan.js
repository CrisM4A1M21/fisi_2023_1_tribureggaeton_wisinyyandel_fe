const delivery = document.querySelector("#btn_deli");
const recoger = document.querySelector("#btn_reco");


delivery.addEventListener("click", () => {
    delivery.classList.remove("color");
    recoger.classList.remove("color");
})

recoger.addEventListener("click", () => {
    delivery.classList.add("color");
    recoger.classList.add("color");
    
})

function redireccion_iniciopantalla(){
    location.href="Principal.html"
}
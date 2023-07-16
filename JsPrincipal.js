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

function aumentarContador(a) {
    event.preventDefault();
    var label = document.getElementById("contador_" + a);
    var contador = parseInt(label.innerHTML);
    contador++;
    label.innerHTML = contador;
}

function disminuirContador(b) {
    event.preventDefault();
    var label = document.getElementById("contador_" + b);
    var contador = parseInt(label.innerHTML);
    if (contador > 0) {
        contador--;
        label.innerHTML = contador;
    }
}

var botonesAnadir = document.querySelectorAll(".button_anadir");

botonesAnadir.forEach(function(boton) {
  boton.addEventListener("click", agregarProducto);
});

function agregarProducto(event) {
    event.preventDefault();
    var boton = event.target;
    var id_producto = parseInt(boton.getAttribute('data-id'));
    console.log(id_producto)
    var label = document.getElementById("contador_" + id_producto);
    var cantidad = parseInt(label.innerHTML);
    
    console.log(cantidad)
    var data = "id_producto=" + id_producto + "&cantidad=" + cantidad;
    alert(data);
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "guardar.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Resto del código...
        }
    };
    xhr.send(data);
} 
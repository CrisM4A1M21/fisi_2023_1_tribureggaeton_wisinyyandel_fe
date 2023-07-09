const delivery = document.querySelector("#btn_deli");
const recoger = document.querySelector("#btn_reco");
const lbl_direccion = document.querySelector("#lbl_direc");
const in_direccion = document.querySelector("#in_direc");
const lbl_celular = document.querySelector("#lbl_cell");
const in_celular = document.querySelector("#in_cell");
const lbl_pago = document.querySelector("#lbl_pago");

const cbx_tipodepago = document.querySelector("#cbx_tdp");

const lbl_monto = document.querySelector("#lbl_monto");
const in_monto = document.querySelector("#in_monto");


delivery.addEventListener("click", () => {
    delivery.classList.remove("color");
    recoger.classList.remove("color");
    lbl_direccion.classList.remove("remove")
    in_direccion.classList.remove("remove")
    lbl_celular.classList.remove("update")
    in_celular.classList.remove("update")

    lbl_pago.classList.remove("update")
    cbx_tipodepago.classList.remove("update")
    lbl_monto.classList.remove("update")
    in_monto.classList.remove("update")
})

recoger.addEventListener("click", () => {
    delivery.classList.add("color");
    recoger.classList.add("color");
    lbl_direccion.classList.add("remove")
    in_direccion.classList.add("remove")
    lbl_celular.classList.add("update")
    in_celular.classList.add("update")

    lbl_pago.classList.add("update")
    cbx_tipodepago.classList.add("update")
    lbl_monto.classList.add("update")
    in_monto.classList.add("update")
})


function redireccion_tercerapantalla(){
    location.href="TerceraPantalla.html"
}
function hideComponent() {
    var comboBox = document.getElementById("cbx_tdp");
    var selectedOption = comboBox.options[comboBox.selectedIndex].value;
    var component = document.getElementById("lbl_monto");
    var component2 = document.getElementById("in_monto");
    var component3 = document.getElementById("img_yape");
    if (selectedOption === "op_Yape") {
      component.style.display = "none"; // Ocultar el componente
      component2.style.display = "none"; // Ocultar el componente
      component3.style.display = "block"; //Mostrar el componente
    } else {
      component.style.display = "block"; // Mostrar el componente
      component2.style.display = "block"; // Mostrar el componente
      component3.style.display = "none"; // Ocultar el componente
    }
  }
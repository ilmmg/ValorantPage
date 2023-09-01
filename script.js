let openModal = document.getElementById('openModal');
let modalAgente = document.getElementById('modal');
let closeModal = document.getElementById('close');

// Abri modal

openModal.onclick = function () {
    modalAgente.style.visibility = "visible";
}

// Cerrar Modal Btn

closeModal.onclick = function () {
    modalAgente.style.visibility = "hidden";
}

// Cerrar en ventana 

modalAgente.onclick = function () {
    modalAgente.style.visibility = "hidden";
}
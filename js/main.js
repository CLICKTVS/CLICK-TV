function mostrarPagos(plan, precio) {
  const popup = document.getElementById("popup");
  const texto = document.getElementById("popup-text");
  texto.innerText = `Has seleccionado el plan ${plan} por $${precio.toLocaleString()} COP`;
  popup.style.display = "flex";
}

function cerrarPopup() {
  document.getElementById("popup").style.display = "none";
}

window.addEventListener("click", function(e) {
  const popup = document.getElementById("popup");
  if (e.target === popup) cerrarPopup();
});

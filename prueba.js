const boton = document.getElementById('boton');
const contador = document.getElementById('contador');
let contadorValor = 0;

boton.addEventListener('click', () => {
  contadorValor++;
  contador.textContent = contadorValor;
});
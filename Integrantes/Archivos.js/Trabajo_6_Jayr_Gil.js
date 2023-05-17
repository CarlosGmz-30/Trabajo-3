let colorButton = document.getElementById("colorButton");
let isRed = true;

function changeColor() {
  let body = document.body;

  if (isRed) {
    body.style.backgroundColor = "blue";
    isRed = false;
  } else {
    body.style.backgroundColor = "red";
    isRed = true;
  }
}

function ocultarHolaMundo() {
  let holaMundo = document.getElementById("holaMundo");
  holaMundo.classList.add("hidden");
}

function cambiarTexto() {
  document.getElementById("texto").innerHTML =
    "  Hey, how are you? you look good ah!";
}

const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const imagen1 = document.getElementById("imagen1");
const imagen2 = document.getElementById("imagen2");

boton1.addEventListener("click", () => {
  imagen1.src = "../Imagenes/Nick.png";
});

boton2.addEventListener("click", () => {
  imagen1.src = "../Imagenes/gil.jpeg";
});

const boton3 = document.getElementById("boton3");
function generarTexto() {
  let texto = document.getElementById("boton3");
  texto.innerHTML +=
    "Este texto no lo genero Jayr lo genero JavaScript" + "<br>";
}

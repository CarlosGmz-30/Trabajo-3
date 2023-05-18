
function changeColor() {
    let body = document.body;

    if (body.style.backgroundColor === "lightblue") {
        body.style.backgroundColor = "lightgreen";
    } else {
        body.style.backgroundColor = "lightblue";
    }
}

var newText = "Or not?";
var previousText = "";

function changeText() {
    var paragraph = document.getElementById("texto");

    if (paragraph.innerHTML === newText) {
        paragraph.innerHTML = previousText;
    } else {
        previousText = paragraph.innerHTML;
        paragraph.innerHTML = newText;
    }
}


var imageElement = document.getElementById("imagen");
var currentImage = "../Imagenes/minecraft_3.jpg";
var previousImage = "../Imagenes/minecraft-2768571.jpg";

function changeImage() {
  imageElement.src = currentImage;
}

function returnImage() {
  imageElement.src = previousImage;
}


function hideMessage() {
    var mensajeElement = document.getElementById("mensaje");
    mensajeElement.style.display = "none";
}

function escribirTexto() {
    var miDiv = document.getElementById("miDiv");
    var h1 = document.createElement("h1");
    h1.textContent = "Este texto no lo escribió Charlie, lo escribió JavaScript";
    miDiv.appendChild(h1);

    var boton = document.getElementById("miBoton");
    boton.disabled = true;
}
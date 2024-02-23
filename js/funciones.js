function encriptar() {
    let texto = document.getElementById("texto").value;
    let textoEncriptado = document.getElementById("texto-encriptado");
    let tituloMensaje = document.getElementById("titulo-right");
    let parrafo = document.getElementById("parrafo-right");
    let muñeco = document.getElementById("muñeco");
    
    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (texto.length != 0) {
        textoEncriptado.value = textoCifrado;
        tituloMensaje.textContent = "";
        parrafo.textContent = "";
        mostrarElementos();
        muñeco.style.display = "none"; 
        
        document.getElementById("boton-copiar").classList.remove("oculto"); 
        
    } else {

        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que desees encriptar o desencriptar";
        ocultarElementos();
        alert("Debes ingresar algun texto");
    }  
   

}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let textoEncriptado = document.getElementById("texto-encriptado");
    let tituloMensaje = document.getElementById("titulo-right");
    let parrafo = document.getElementById("parrafo-right");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (texto.length != 0) {
        textoEncriptado.value = textoCifrado;
        tituloMensaje.textContent = "";
        parrafo.textContent = "";
        mostrarElementos();

    } else {
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que desees encriptar o desencriptar";
        ocultarElementos();
        alert("Debes ingresar algun texto");
    }

    muñeco.style.display = "none"; 
}

function mostrarElementos() {
    document.getElementById("texto-encriptado").classList.remove("oculto");
    document.getElementById("boton-copiar").classList.remove("oculto");
}

function ocultarElementos() {
    document.getElementById("texto-encriptado").classList.add("oculto");
    document.getElementById("boton-copiar").classList.add("oculto");
}

function copiarTexto() {
    let textoEncriptado = document.getElementById("texto-encriptado");
    textoEncriptado.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}
const obtenerTexto = () => document.querySelector(".textoIngresado").value.toLowerCase();
const encriptar = Texto => Texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g,"ufat");
const desencriptar = Texto => Texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
const limpiarInput =(etiqueta) => document.querySelector(etiqueta).value = ""; 
const mostrarTextoEncriptado = () =>{
    document.getElementById("textoResultado").value = encriptar(obtenerTexto());
    limpiarInput(".textoIngresado");
} 
const mostrarTextoDesencriptado = () => {
    document.getElementById("textoResultado").value = desencriptar(obtenerTexto());
    limpiarInput(".textoIngresado");
}



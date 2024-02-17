// const obtenerTexto = () => document.querySelector(".textoIngresado").value.toLowerCase();
// const encriptar = Texto => Texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g,"ufat");
// const desencriptar = Texto => Texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
// const limpiarInput =(etiqueta) => document.querySelector(etiqueta).value = ""; 

// const mostrarTextoEncriptado = () =>{
//     const imagenMuneco = documet.querySelector('.imagen');
//     const titulo = document.querySelector('.titulo');
//     const recomendacion = document.querySelector('.recomendacion');
//     imagenMuneco.style.display = 'block';
//     document.querySelector(".textoResultado").value = encriptar(obtenerTexto());
//     limpiarInput(".textoIngresado");
    
// } 
// const mostrarTextoDesencriptado = () => {
//     document.querySelector(".textoResultado").value = desencriptar(obtenerTexto());
//     limpiarInput(".textoIngresado");
// }

document.addEventListener("DOMContentLoaded", function () {
    const imagenMuneco = document.querySelector('.imagen');
    const titulo = document.querySelector('.titulo');
    const recomendacion = document.querySelector('.recomendacion');
    const textoResultado = document.querySelector(".textoResultado");
    const textoIngresado = document.querySelector('.textoIngresado');
    const btnEncriptar = document.querySelector('#encriptar');
    const btnDesencriptar = document.querySelector("#desencriptar");
    const btnCopiar = document.querySelector('#copiar');
  
    textoIngresado.addEventListener('keydown', validarEntrada);
    btnEncriptar.addEventListener('click', mostrarTextoEncriptado);
    btnDesencriptar.addEventListener("click", mostrarTextoDesencriptado);
    btnCopiar.addEventListener('click', copy);
  
    function validarEntrada(event) {
      let tecla = event.key;
      if (/^[a-z\s]+$|^Backspace$/.test(tecla)) {
      } else {
        event.preventDefault();
      }
    }
  
    function copy() {
      textoResultado.select();
      document.execCommand("copy");
    }
  
    function encriptar(texto) {
      return texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    }
  
    function desencriptar(texto) {
      return texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    }
  
    function mostrarTextoEncriptado() {
      mostrarBotonCopiar(true);
      imagenMuneco.style.display = 'none';
      titulo.textContent = " ";
      recomendacion.textContent = " ";
      btnCopiar.style.display = 'block';
      textoResultado.value = encriptar(obtenerTexto());
      limpiarInput(".textoIngresado");
    }
  
    function mostrarTextoDesencriptado() {
        mostrarBotonCopiar(true);
      imagenMuneco.style.display = 'none';
      titulo.textContent = "";
      recomendacion.textContent = "";
      textoResultado.value = desencriptar(obtenerTexto());
      limpiarInput(".textoIngresado");
    }
  
    function limpiarInput(etiqueta) {
      document.querySelector(etiqueta).value = "";
    }
  
    function obtenerTexto() {
      return textoIngresado.value.toLowerCase();
    }

    function mostrarBotonCopiar(mostrar) {
        btnCopiar.style.visibility = mostrar ? 'visible' : 'hidden';
      }
  });

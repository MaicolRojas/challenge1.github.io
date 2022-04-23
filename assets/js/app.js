
const reglas = { "e":"enter","i":"imes","a":"ai","o":"ober","u":"ufat"} // Reglas de la codificacion


const area2 = document.querySelector('.area2') // trayendo el area de codificacion

const tx = document.querySelector('#texto') // trayendo el elemento que recibe el texto 

 
// creando la salida para poder imprimir el mensaje en pantalla
function crearSalida() {
    const l = document.querySelector('#exit')
    const child = document.createTextNode('')
    l.innerHTML = '' 
    l.appendChild(child) 
    salida = child
  }
  crearSalida()

// Encriptando el mensaje

function encriptar() {
    let texto = document.getElementById("texto").value;
    tx.value = ''
    if (texto.length === 0){
      ocultar();
      salida.nodeValue = ""
    }else{
      for (const r in reglas) {
        let Encriptado = texto.replaceAll(r,reglas[r]);
        texto = Encriptado;        
      }
      mostrar()
      salida.nodeValue = texto 
      

    }
}

// desecriptando el mensaje 
function desencriptar () {
  let texto = document.getElementById("texto").value;
  tx.value = ''
  if (texto.length === 0){
    ocultar();
    salida.nodeValue = ""
  }else{
    for (const r in reglas) {
        let Encriptado = texto.replaceAll(reglas[r],r);
        texto = Encriptado;        
    }
    mostrar()
    salida.nodeValue = texto 
  }
}


//ocultando la imagen y el texto del area de codificación
function mostrar(){
    area2.classList.add('main2-exit')
}

//mostrando la imagen y el texto del area de codificación
function ocultar() {
  area2.classList.remove('main2-exit')
}

//copiando el contenido del area de codificación y dedocificacion

const kClipboard = navigator.clipboard
function copiar() {
  if (kClipboard) {
    kClipboard
      .writeText(salida.nodeValue)
      .then(() =>alert('copiado'))
  }
}
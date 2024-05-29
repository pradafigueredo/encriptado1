   function contenedorcajatexto() {
 //   let cajatexto = document.getElementById("cajatexto").value;
 //   let resultado = document.getElementById("texto-resultado");
//    let contenedor = document.getElementById("contenedor-parrafo");
  ///  let munieco = document.getElementById("contenedormunieco");

    let cajatextoCifrado = cajatexto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

    if (document.getElementById("cajatexto").value.length ! = 0) {
         document.getElementById("cajatexto").value = cajatextoCifrado;
         document.getElementById("texto-resultado").textContent = "Texto encriptado con éxito";
         document.getElementById("contenedor-parrafo").textContent = "";
         document.getElementById("contenedormunieco").src = "./img/Muñeco.jpg";
        else {
            alert("Debes ingresar algún texto");
        }

    }
        

}


    
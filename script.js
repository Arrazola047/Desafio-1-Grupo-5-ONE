function encriptar(){
    let texto = document.getElementById("input").value.toLowerCase();
    console.log("El valor capturado es: " + texto);
    let parrafo = document.getElementById("parrafo");
    let tituloMensaje =document.getElementById("noTxt");
    let muñeco = document.getElementById("imagenMuneco");

    /*
    let textoCifrado = texto.replace(/a/gi, "ai")
                            .replace(/e/gi, "enter")
                            .replace(/i/gi, "imes")
                            .replace(/o/gi, "ober")
                            .replace(/u/gi, "ufat");
    */
    
    /*Se encontro un bug, el texto obtenido se ecnripta a si mismo
    Ej: al poner asd -  encripta aimessd - ai luego encuentra la i y coloca mes*/ 

    let textoCifrado = texto
                            .replace(/e/gi, "enter")
                            .replace(/i/gi, "imes")
                            .replace(/a/gi, "ai")
                            .replace(/o/gi, "ober")
                            .replace(/u/gi, "ufat");

    if(texto.length != 0){
        texto = textoCifrado;
        console.log("El texto cifrado es: " + textoCifrado);
        tituloMensaje.textContent = "";
        parrafo.textContent = "";
        document.getElementById("imagenMuneco").style.visibility = "hidden";
        document.getElementById("copy").style.visibility = "visible";
        document.getElementById("mensaje").style.visibility = "visible";
        document.getElementById("mensaje").value = textoCifrado;
    }
    else{
        document.getElementById("imagenMuneco").style.visibility = "visible";
        document.getElementById("copy").style.visibility = "hidden";
        document.getElementById("mensaje").style.visibility = "hidden";
        tituloMensaje.textContent = "Ningún mensaje encontrado";
        parrafo.textContent = "Ingrese el texto que desea encriptar o desencriptar";
        alert("No se detecto texto a encriptar!");
    }
}

function desencriptar(){
    var texto = document.getElementById("input").value.toLowerCase();
    console.log("El valor capturado es: " + texto);
    let parrafo = document.getElementById("parrafo");
    let tituloMensaje =document.getElementById("noTxt");
    /*
    let muñeco = document.getElementById("imagenMuneco");
    /*
    var textoDes = texto.replace(/ai/gi,"a")
                        .replace(/enter/gi,"e")
                        .replace(/imes/gi,"i")
                        .replace(/ober/gi,"o")
                        .replace(/ufat/gi,"u"); 
    */

    let textoDes = texto
                            .replace(/enter/gi, "e")
                            .replace(/imes/gi, "i")
                            .replace(/ai/gi, "a")
                            .replace(/ober/gi, "o")
                            .replace(/ufat/gi, "u");

    if(texto.length != 0){
        texto = textoDes;
        console.log("El texto descifrado es: " + textoDes);
        tituloMensaje.textContent = "";
        parrafo.textContent = "";
        document.getElementById("imagenMuneco").style.visibility = "hidden";
        document.getElementById("copy").style.visibility = "visible";
        document.getElementById("mensaje").style.visibility = "visible";
        document.getElementById("mensaje").value = textoDes;
    }
    else{
        document.getElementById("imagenMuneco").style.visibility = "visible";
        document.getElementById("copy").style.visibility = "hidden";
        document.getElementById("mensaje").style.visibility = "hidden";
        tituloMensaje.textContent = "Ningún mensaje encontrado";
        parrafo.textContent = "Ingrese el texto que desea encriptar o desencriptar";
        alert("No se encontro texto a desencriptar!");
    }
}

function copiarTxt(){
    let texto = document.getElementById("mensaje").value;

    navigator.clipboard.writeText(texto);
    console.log("El texto copiado al portapapeles es: " + texto);
}
var textoentrada= document.querySelector("cuadro");

function encriptar(encriptado){
    var texto = textoentrada.value;
    console.log(texto);
    var encriptado = texto.replace(/ai/img,"a")
    var encriptado = texto.replaceAll("a","ai");
    console.log(encriptado);

    document.getElementById("resuelto").innerHTML = encriptado;
}

function desencriptar(){
    var texto = document.getElementById("input").value.toLowerCase();

    var desencriptado = texto.replace(/ai/img,"a");
    var desencriptado = desencriptado.replace(/enter/img,"e");
    var desencriptado = desencriptado.replace(/imes/img,"i");
    var desencriptado = desencriptado.replace(/ober/img,"o");
    var desencriptado = desencriptado.replace(/ufat/img,"u");

    document.getElementById("resuelto").innerHTML = desencriptado;
}
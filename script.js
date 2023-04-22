var textoentrada= document.getElementById("cuadro").value;

function encriptar(encriptado){
    console.log(textoentrada);
    var encriptado = textoentrada.replace(/ai/img,"a")
    encriptado = textoentrada.replaceAll("a","ai");
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
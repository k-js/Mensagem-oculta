function criptografa() {
    var texto = document.getElementById("messagem-box").value;
    var  textoCodificado = btoa(texto);  
    var resultado = document.getElementById("resultado");
    resultado.innerText = textoCodificado;
}

function ativaCodifica() {
    document.getElementById("enviar").value = "Codificar Mensagem!" 
}

function ativaDecodifica() {
    document.getElementById("enviar").value = "Decodificar Mensagem!" 
}
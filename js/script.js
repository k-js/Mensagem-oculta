function criptografa() {
    var texto = document.getElementById("messagem-box").value;
    var  textoCodificado = btoa(texto); 
    
    var resultado = document.getElementById("resultado");
    
    resultado.innerText = textoCodificado;
}

function ativaCodifica() {
    var btnEnviar = document.getElementById("enviar");
    btnEnviar.value = "Codificar mansagem!";
}
function ativaCodifica() {
    document.getElementById("enviar").value = "Codificar Mensagem!"  
}
function ativaDecodifica() {
    document.getElementById("enviar").value = "Decodificar Mensagem!"    
}

document.getElementById("enviar").addEventListener("click", codificar)
document.getElementById("enviar").addEventListener("click", decodificar)

function codificar() {

    const textoDigitado = document.getElementById("message-box").value;
    const encodedStr = btoa(textoDigitado);
    const resultado = encodedStr;
  
    document.getElementById("resultado").innerHTML =
    ("<h3 id='msg'>Mensagem:</h3>" +
    "<textarea rows=5 cols=70>" + resultado + "</textarea><br>");
}

function decodificar() {

    const textoDigitado = document.getElementById("message-box").value;
    const encodedStr = atob(textoDigitado);
    const resultado = encodedStr;
  
    document.getElementById("resultado").innerHTML =
    ("<h3 id='msg'>Mensagem:</h3>" +
    "<textarea rows=5 cols=70>" + resultado + "</textarea><br>");
}

document.getElementById("limpar").addEventListener("click", limpar);

  function limpar() {
    location.reload();
  }
function ativaCodifica() {
    document.getElementById("enviar").value = "Codificar Mensagem!" 
    document.getElementById("enviar").addEventListener("click", codificar); 
}

function ativaDecodifica() {
    document.getElementById("enviar").value = "Decodificar Mensagem!" 
    document.getElementById("enviar").addEventListener("click", decodificar);
}

function acaoCodifica(textoDigitado, incremento) {
    let novoTexto = "";
    let posicao;
    for (let i = 0; i <textoDigitado.length; i++) {
      posicao = textoDigitado.charCodeAt([i]);
      if (posicao >= 65 && posicao <= 90) {
        posicao = ((posicao - 65 + incremento) % 26) + 65;
        novoTexto = novoTexto.concat(String.fromCharCode(posicao));
      }
      else if (posicao >= 97 && posicao <= 122) {
        posicao = ((posicao - 97 + incremento) % 26) + 97;
        novoTexto = novoTexto.concat(String.fromCharCode(posicao));
      }
      else {
        novoTexto = novoTexto.concat(String.fromCharCode(posicao));
      }
    }
    return novoTexto;
}

function codificar() {
    const textoDigitado = document.getElementById("message-box").value;
    const incremento = parseInt(document.getElementById("incremento").value);
    const resultado = acaoCodifica(textoDigitado, incremento);
  
    document.getElementById("resultado").innerHTML =
    ("<h3 id='titulo2'>Mensagem codificada:</h3>" +
      "<textarea rows=5 cols=70>" + resultado + "</textarea><br>");
}

function acaodecodificar(textoDigitado, incremento) {
    let novoTexto = "";
    let posicao;
    for (let i = 0; i < textoDigitado.length; i++) {
      posicao = textoDigitado.charCodeAt([i]);
      if (posicao >= 65 && posicao <= 90) {
        posicao = ((posicao - 90 - incremento) % 26) + 90;
        novoTexto = novoTexto.concat(String.fromCharCode(posicao));
      }
      else if (posicao >= 97 && posicao <= 122) {
        posicao = ((posicao - 122 - incremento) % 26) + 122;
        novoTexto = novoTexto.concat(String.fromCharCode(posicao));
      }
      else {
        novoTexto = novoTexto.concat(String.fromCharCode(posicao));
      }
    }
    return novoTexto;
}

function  decodificar() {
    const textoDigitado = document.getElementById("message-box").value;
    const incremento = parseInt(document.getElementById("incremento").value);
    const resultado = acaodecodificar(textoDigitado, incremento);
  
    document.getElementById("resultado").innerHTML =
      ("<h3 id='titulo2'>Mensagem decodificada:</h3>" +
        "<textarea rows=5 cols=70>" + resultado + "</textarea><br>");
  }

  document.getElementById("limpar").addEventListener("click", limpar);

  function limpar() {
    location.reload();
  }
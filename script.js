var items = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];

function Codificar(texto) {
  items.forEach((element) => {
    var textoProcurar = element[0];
    var textoSubstituir = element[1];
    texto = texto.replaceAll(textoProcurar, textoSubstituir);
    console.log(texto.replaceAll(textoProcurar, textoSubstituir));
  });
  return texto;
}

function Decodificar(texto) {
  items.forEach((element) => {
    var textoProcurar = element[1];
    var textoSubstituir = element[0];
    texto = texto.replaceAll(textoProcurar, textoSubstituir);
  });

  return texto;
}

function copiar(campo) {
  campo.select();
  campo.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(campo.value);
  alert("O texto foi copiado");
}

function entradaValida(texto) {
  if (texto === "") {
    alert("Digite um texto!");
    return false;
  }
  if (texto.toLowerCase() != texto) {
    alert("Deve usar apenas letras minusculas!");
    return false;
  }
  const caracteresAcentos = "ÁÉÍÓÚáéíóúâêîôûàèìòùÇç";
  var arrayCaracteresAcentos = caracteresAcentos.split("");

  arrayCaracteresAcentos.forEach(function (caractere) {
    if (texto.includes(caractere)) {
      alert("Não pode utilizar acentos!");
      return false;
    }
  });
  return true;
}

function validaTextoCriptografado(texto) {}
//botao de desencriptar
document.getElementById("btn-cripto").addEventListener("click", function () {
  var textoCodificado = document.getElementById("input-texto").value;
  if (!entradaValida(textoCodificado)) {
    return;
  }
  var textoDecodificado = Codificar(textoCodificado);
  document.getElementById("msg").value = textoDecodificado;
});
//botao de encriptar
document.getElementById("btn-descripto").addEventListener("click", function () {
  var textoNormal = document.getElementById("input-texto").value;
  if (!entradaValida(textoNormal)) {
    return;
  }
  var textoDecodificado = Decodificar(textoNormal);
  document.getElementById("msg").value = textoDecodificado;
});
//botao de copiar
document.getElementById("btn-copy").addEventListener("click", function () {
  var inputMensagem = document.getElementById("msg");
  copiar(inputMensagem);
});

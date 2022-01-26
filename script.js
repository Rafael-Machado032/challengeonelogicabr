/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/
var items = [
  ["e", "enter"], 
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"]
];

function Codificar(texto) {

  items.forEach((element) => {
    var textoProcurar = element[0];
    var textoSubstituir = element[1];
    texto=texto.replaceAll(textoProcurar, textoSubstituir);
    console.log(texto.replaceAll(textoProcurar, textoSubstituir));
  });
  return texto;
}

function Decodificar(texto) {

    items.forEach((element) => {
      var textoProcurar = element[1];
      var textoSubstituir = element[0];
      texto=texto.replaceAll(textoProcurar, textoSubstituir);
    });

    return texto;
  }
  function copiar(campo){
        campo.select();
        campo.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(campo.value);
        alert("O texto foi copiado");
  }

  document.getElementById("btn-cripto").addEventListener("click", function () {
    var textoDecodificado = document.getElementById("input-texto").value;
    if(textoDecodificado.toLowerCase() != textoDecodificado){

      alert("maiuscula!");
    }
    var textoCodificado = Codificar(textoDecodificado);
    document.getElementById("msg").value = textoCodificado;
  });
  document.getElementById("btn-descripto").addEventListener("click", function () {
      var textoCodificado = document.getElementById("input-texto").value;
      var textoDecodificado = Decodificar(textoCodificado);
      document.getElementById("msg").value = textoDecodificado;
    });
    document.getElementById("btn-copy").addEventListener("click", function () {
      var inputMensagem = document.getElementById("msg");
      copiar(inputMensagem);
    });    });

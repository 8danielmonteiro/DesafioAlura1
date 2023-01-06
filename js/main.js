function criptografar() {
  var texto = document.getElementById("texto").value;
  var displayText = document.getElementById("resultado").style.display;
  var displayImg = document.getElementById("img-texto").style.display;
  var boxH1 = document.getElementById("h1").style.display;
  var boxP = document.getElementById("p").style.display;
  var botaoCopiar = document.getElementById("btn-3").style.display;

  texto = texto.replace(/e/g, "enter");
  texto = texto.replace(/i/g, "imes");

  texto = texto.replace(/a/g, "ai");
  texto = texto.replace(/o/g, "ober");
  texto = texto.replace(/u/g, "ufat");

  document.getElementById("resultado").value = texto;
  displayText = "block";
  displayImg = "none";
  boxH1 = "none";
  boxP = "none";
  botaoCopiar = "block";
  document.getElementById("resultado").style.display = displayText;
  document.getElementById("img-texto").style.display = displayImg;
  document.getElementById("h1").style.display = boxH1;
  document.getElementById("p").style.display = boxP;
  document.getElementById("btn-3").style.display = botaoCopiar;
}

function descriptografar() {
  var texto = document.getElementById("texto").value;
  var displayText = document.getElementById("resultado").style.display;
  var displayImg = document.getElementById("img-texto").style.display;
  var boxH1 = document.getElementById("h1").style.display;
  var boxP = document.getElementById("p").style.display;
  var botaoCopiar = document.getElementById("btn-3").style.display;

  texto = texto.replace(/enter/g, "e");
  texto = texto.replace(/imes/g, "i");
  texto = texto.replace(/ai/g, "a");
  texto = texto.replace(/ober/g, "o");
  texto = texto.replace(/ufat/g, "u");
  document.getElementById("resultado").value = texto;
  displayText = "block";
  displayImg = "none";
  boxH1 = "none";
  boxP = "none";
  botaoCopiar = "block";
  document.getElementById("resultado").style.display = displayText;
  document.getElementById("img-texto").style.display = displayImg;
  document.getElementById("h1").style.display = boxH1;
  document.getElementById("p").style.display = boxP;
  document.getElementById("btn-3").style.display = botaoCopiar;
}
function copiarTexto() {
  var textoCopiado = document.getElementById("resultado");
  textoCopiado.select();
  document.execCommand("copy");
}
/*etapas 
1 - armazenar o texto ao clicar no botao criptografar
2 - modificar o texto conforme a criptografia definida
3 - inserir o texto na área do resultado
4 - modificar o display do resultado e da imagem
5 - armazenar o texto ao clicar no botão descriptografar
6 - repetir etapa 2 3 e 4
7 - copiar o texto do resultado ao clicar no botão copiar

*/

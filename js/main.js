function criptografar() {
  var texto = document.getElementById("texto").value;
  var displayText = document.getElementById("resultado").style.display;
  var displayImg = document.getElementById("img-texto").style.display;
  var boxH1 = document.getElementById("h1").style.display;
  var boxP = document.getElementById("p").style.display;
  var botaoCopiar = document.getElementById("btn-3").style.display;
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

/*etapas 
1 - armazenar o texto ao clicar no botao criptografar
2 - modificar o texto conforme a criptografia definida
3 - inserir o texto na área do resultado
4 - modificar o display do resultado e da imagem
5 - armazenar o texto ao clicar no botão descriptografar
6 - repetir etapa 2 3 e 4
7 - copiar o texto do resultado ao clicar no botão copiar

*/

const botoes = document. querySelector("button");
botoes.forEach(function(botao) {
botao.addEventListener("click", botaoClicado);

function botaoClicado() {
console.log("fui clicado");
let texto = botao.querySelector("span");
texto.textContent++;
}
});








//                                      ####legendas:
//querySeletor: seleciona o primeiro elemento que corresponde a um seletor CSS espesificado.
// addEventListener: adiciona um aevento de click, permitindo que você execulte uma função quando o evento ocorre.
//textContent: modifica o conteúdo de texto de um elemento HTML.botoes.forEach(function(botao) {
botao.addEventListener("click", botaoClicado);


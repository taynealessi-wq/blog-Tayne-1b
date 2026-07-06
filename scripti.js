const bota = document. querySelector("button");
botao.addEventListener("click",botaoClicado);


//cria a função que fará com que o texto do número zero some + 1 a cada click.
function botaoClicado() {
    let texto = botao.querySelector("span");
    texto.textContent++;

}

//                                      ####legendas:
//querySeletor: seleciona o primeiro elemento que corresponde a um seletor CSS espesificado.
// addEventListener: adiciona um aevento de click, permitindo que você execulte uma função quando o evento ocorre.
//textContent: modifica o conteúdo de texto de um elemento HTML.
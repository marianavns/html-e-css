// IMPORTAR O ELEMENTO QUE SERÁ ALTERADO
let botaoColorido = document.getElementById('botaoColorido') 

// CRIAR A FUNÇÃO QUE SERÁ CHAMADA EM DETERMINADO EVENTO
function mudaCor() {
    botaoColorido.style.backgroundColor = "pink";
}

// CRIAR O "ESCUTADOR" DO EVENTO, referenciando o evento em si e o que vai acontecer.
botaoColorido.addEventListener("click", mudaCor)
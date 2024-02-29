function ColocarNumeroNaTela(caracteres) {

    const Input = document.querySelector(".tela").value

    document.querySelector(".tela").value = Input + caracteres
}

function LimparTela() {

    document.querySelector(".tela").value = ""

}

function Calculos() {

    const Input = document.querySelector(".tela").value

    document.querySelector(".tela").value = eval(Input)
}

function MaisOuMenos() {

    const Input = document.querySelector(".tela").value

    document.querySelector(".tela").value = Input * -1
}
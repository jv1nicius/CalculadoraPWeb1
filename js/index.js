var localValor = document.getElementById("valor"), localValor1 = document.getElementById("valor1"), localOperador = document.getElementById("operador");
let localValorFinal = document.getElementById("result")
var result;
let botão = document.querySelector("button.btn");

let soma = (a, b) => a+b

function subtracao(a, b){
    return a-b
}

let mutiplicacao = function(a, b){
    return a*b
}

let divisao = (a, b) => {
    if(b == 0){
        return "Não é possível dividir por 0";
    }
    if(a == 0){
        return 0;
    }else{
        return a/b;
    }
}

function calcular(){
    valor = Number(document.getElementById("inputValor1").value)
    valor1 = Number(document.getElementById("inputValor2").value)
    operador = document.getElementById("inputOperador").value
    verTipo(valor, valor1);
    vazio(operador);
    switch(operador){
        case "1":
            result = soma(valor, valor1)
            break;
        case "2":
            result = subtracao(valor, valor1)
            break;
        case "3":
            result = mutiplicacao(valor, valor1)
            break;
        case "4":
            result = divisao(valor, valor1)
            break;
        default:
            result = "Erro! Valor não encontrado!";
            break;
    }
    localValorFinal.innerHTML = "Resultado: " + result;
}


let vazio = (operador) => {
    if(operador == ""){
        localOperador.innerHTML = 
        '<div class="alert alert-danger my-2 py-1" role="alert">' +
        'Selecione a operação' +
            '</div>'
        }
    }
    
let removeAlert = (id) => {
    if(id == 'valor'){
        localValor.innerHTML = ""
    }else if(id == 'valor1') {
        localValor1.innerHTML = ""
    }else if(id == 'operador'){
        localOperador.innerHTML = ""
    }
}

let verTipo = (a, b) => {
    if(isNaN(a)){
        localValor.innerHTML =
        '<div class="alert alert-danger my-2 py-1" role="alert">' +
        'Erro! impossível realizar operação<br>' +
        'Por favor, selecione um número'+
        '</div>';
        result = 0;
    }
    if(isNaN(b)){
        localValor1.innerHTML =
        '<div class="alert alert-danger my-2 py-1" role="alert">' +
        'Erro! impossível realizar operação<br>' +
        'Por favor, selecione um número'+
        '</div>';
        result = 0;
    }
}
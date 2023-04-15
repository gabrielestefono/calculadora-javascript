// Botões
let idsDeNumeros = 'btn-';
let numeros = new Array;
let numerosHTML = new Array;
let mostrador = document.getElementById('mostrador');
let apagar = document.getElementById('apagar');
let mais = document.getElementById('mais');
let menos = document.getElementById('menos');
let numeroUm = '';
let numeroDois = '';
let zerarContador = false;
let resultadoString;
let resultado;

mostrador.innerHTML == 0

for(let i = 0; i < 10; i++){
    numeros.push(idsDeNumeros + i);
    numerosHTML.push(document.getElementById(numeros[i]));
}

numerosHTML.forEach(botao=>{
    botao.addEventListener('click', ()=>{
        mostrar(botao.innerText)
    })
})

let definindoPrimeiroNumero = (valor)=>{
    numeroUm = valor;
}

let definindoSegundoNumero = (valor)=>{
    numeroDois = valor;
}

let definindoOperacao = (valor)=>{
    if(valor == '+'){
        return numeroUm + "+";
    }else if(valor == '-'){
        return numeroUm + "-";
    }
}

let mostrar = (valor)=>{
    if(zerarContador){
        mostrador.innerText = 0;
        zerarContador = false;
    }
    if(mostrador.innerHTML == 0){
        mostrador.innerHTML = valor;
    }else if(mostrador.innerHTML.length == 8){
        mostrador.innerHTML = mostrador.innerText;
    }else{
        mostrador.innerHTML = mostrador.innerText + valor;
    }
}

let resultadoOperacaoMais = (valor1, valor2)=>{
    return valor1 + valor2;
}

let resultadoOperacaoMenos = (valor1, valor2)=>{
    return valor1 - valor2;
}

let resolverOperacao = (valor1, valor2)=>{
    if(valor1.substr(-1) == '+'){
        let resultadoOperacao = resultadoOperacaoMais(parseFloat(numeroUm), parseFloat(valor2));
        return resultadoOperacao;
    }else if(valor1.substr(-1) == '-'){
        let resultadoOperacao = resultadoOperacaoMenos(parseFloat(numeroUm), parseFloat(valor2));
        return resultadoOperacao;
    }
}

mais.addEventListener('click', ()=>{
    if(numeroUm == ''){
        definindoPrimeiroNumero(mostrador.innerText);
        zerarContador = true;
        resultadoString = definindoOperacao('+')
    }else{
        definindoSegundoNumero(mostrador.innerText);
        resultado = resolverOperacao(resultadoString, numeroDois);
        definindoPrimeiroNumero(resultado);
        mostrador.innerText = resultado;
        zerarContador = true;
        resultadoString = definindoOperacao('+')
    }
})

menos.addEventListener('click', ()=>{
    if(numeroUm == ''){
        definindoPrimeiroNumero(mostrador.innerText);
        zerarContador = true;
        resultadoString = definindoOperacao('-')
    }else{
        definindoSegundoNumero(mostrador.innerText);
        resultado = resolverOperacao(resultadoString, numeroDois);
        definindoPrimeiroNumero(resultado);
        mostrador.innerText = resultado;
        zerarContador = true;
        resultadoString = definindoOperacao('-')
    }
})
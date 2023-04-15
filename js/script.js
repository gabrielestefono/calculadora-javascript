// Variáveis 
let idsDeNumeros = 'btn-';
let numeros = new Array;
let numerosHTML = new Array;
let operacaoString = new Array;
let operacoes = Array.from(document.getElementsByClassName('operacao'));
let mostrador = document.getElementById('mostrador');
let historico = document.getElementById('historico');
let apagar = document.getElementById('apagar');
let inverter = document.getElementById('inverter');
let igual = document.getElementById('igual');
let numeroUm;
let strHistorico;
let porcentagem = false;
let numeroDois;
let zerarContador = false;
let resultado;
let proximo;
let pular = false;
let operacao;

// Criando funcionalidade de botões numéricos
for(let i = 0; i < 11; i++){
    numeros.push(idsDeNumeros + i);
    numerosHTML.push(document.getElementById(numeros[i]));
}

numerosHTML.forEach(botao=>{
    botao.addEventListener('click', ()=>{
        mostrar(botao.innerText)
        pular = true;
    })
})

// Criando funcionalidade de operações
operacoes.forEach(operacao => {
    operacao.addEventListener('click', ()=>{
        definirOperacao(operacao.innerText);
    })
});



// FUNÇÕES



    // Função que define o que vai ser mostrado na tela, enquanto o usuário digita
let mostrar = (valor)=>{
    if(zerarContador){
        mostrador.innerHTML = 0;
        zerarContador = false;
    }
    if(mostrador.innerHTML == 0){
        mostrador.innerHTML = valor;
    }else if(mostrador.innerHTML.length == 8){
        if(mostrador.innerHTML.indexOf('.') == -1){
            mostrador.innerHTML = mostrador.innerText;
        }else{
            mostrador.innerHTML = mostrador.innerText + valor;
        }
    }else if(mostrador.innerHTML.length == 9){
        mostrador.innerHTML = mostrador.innerText;
    }else{
        mostrador.innerHTML = mostrador.innerText + valor;
    }
}

let mostrarHistorico = ()=>{
    operacaoString.forEach(valor => {
        if(strHistorico == undefined){
            strHistorico = valor;
        }else{
            strHistorico = strHistorico + valor;
        }
        historico.innerText = strHistorico; 
    })
}

    // Mostrar resultados
let mostrarResultado = (valor)=>{
    if(valor > 99999999){
        mostrador.innerText = 'Erro';
    }else{
        mostrador.innerText = String(valor).substr(0, 9)
    }
}

    // Definir operações
let definirOperacao = (valor)=>{
    if(pular){
        pular = false;
        operacaoString.push(mostrador.innerText);
        operacaoString.push(valor)
        zerarContador = true
    }else{
        operacaoString.pop()
        operacaoString.push(valor)
    }
    console.log('Sim')
    strHistorico = '';
    mostrarHistorico(); 
    separarValores();
}

    // Separar Valores para execução dos cálculos
let separarValores = ()=>{
    if(operacaoString.length >= 3){
        numeroUm = parseFloat(operacaoString[operacaoString.length - 4]);
        operacao = operacaoString[operacaoString.length - 3];
        numeroDois = parseFloat(operacaoString[operacaoString.length - 2]);
        proximo = operacaoString[operacaoString.length - 1];
        if(proximo == '%'){
            porcentagem = true;
        }
        resultado = calcular(numeroUm, operacao, numeroDois);
        mostrarResultado(resultado);
        operacaoString = [];
        operacaoString.push(resultado);
        operacaoString.push(`${proximo}`);
        if(proximo == '='){
            operacaoString = [];
            numeroUm = '';
            numeroDois = '';
            pular = true;
        }
    }else if(operacaoString.length <= 2){
        operacao = operacaoString[operacaoString.length - 1];
        if(operacao == '%'){
            mostrador.innerText = 'Erro';
            operacaoString = [];
            numeroUm = '';
            numeroDois = '';
            pular = true;
        }
    }
}

    // Calcular os dados de acordo com a operação passada
let calcular = (valor1, operacao, valor2)=>{
    if(porcentagem){
        valor2 = ((valor1 / 100)) * valor2
        porcentagem = false
    }
    if(operacao == '+'){
        return valor1 + valor2
    }else if(operacao == '-'){
        return valor1 - valor2
    }else if(operacao == 'x'){
        return valor1 * valor2
    }else if(operacao == '÷'){
        return valor1 / valor2
    }
}

// LISTENERS
    // Botão de Apagar
apagar.addEventListener('click', ()=>{
    mostrarResultado(0)
    numeroUm = '';
    numeroDois = '';
    operacaoString = [];
    historico.innerText = '';
})

    // Botão que inverte o sinal
inverter.addEventListener('click', ()=>{
    mostrador.innerText = parseFloat(mostrador.innerText * -1)
})

    // Definindo o mostrador inicial como 0
mostrador.innerHTML = 0
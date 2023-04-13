let mostrador = document.getElementById('mostrador');
let apagar = document.getElementById('apagar');
let ponto = document.getElementById('ponto');
let mais = document.getElementById('mais');
let menos = document.getElementById('menos');
let vezes = document.getElementById('vezes');
let dividir = document.getElementById('dividir');
let btn0 = document.getElementById('btn-0');
let btn1 = document.getElementById('btn-1');
let btn2 = document.getElementById('btn-2');
let btn3 = document.getElementById('btn-3');
let btn4 = document.getElementById('btn-4');
let btn5 = document.getElementById('btn-5');
let btn6 = document.getElementById('btn-6');
let btn7 = document.getElementById('btn-7');
let btn8 = document.getElementById('btn-8');
let btn9 = document.getElementById('btn-9');
let numero1 = 0;
let numero2 = 0;
let vez = 0;
let operacao1 = false;
let operacao2 = false;
let colocarPonto = false;

let botoesNumeros = new Array(btn0,btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9);
mostrador.innerText = 0;

let mostrar = (valor)=>{
    if(operacao1){
        operacao1 = false
        mostrador.innerText = 0;
        console.log('Sim')
    }
    if(mostrador.innerText == 0){
        mostrador.innerText = valor;
    }else if(mostrador.innerText.length == 8){
        if(mostrador.innerText.indexOf(".") != -1){    
            mostrador.innerText = mostrador.innerText + valor;
        }
    }else if(mostrador.innerText.length == 9){
        mostrador.innerText = mostrador.innerText;
    }else{
        mostrador.innerText = mostrador.innerText + valor;
    }
}

let soma = (a,b)=>{
    numero1 = parseFloat(a) + parseFloat(b);
    return parseFloat(a) + parseFloat(b);
}

let subtracao = (a,b)=>{
    numero1 = parseFloat(a) - parseFloat(b);
    return parseFloat(a) - parseFloat(b);
}

let divisao = (a,b)=>{
    numero1 = parseFloat(a) / parseFloat(b);
    return parseFloat(a) + parseFloat(b);
}

let multiplicacao = (a,b)=>{
    numero1 = parseFloat(a) * parseFloat(b);
    return parseFloat(a) + parseFloat(b);
}

botoesNumeros.forEach(numero=>{
    numero.addEventListener('click', ()=>{
        mostrar(numero.innerText)
    })
})

ponto.addEventListener('click', ()=>{
    mostrar(ponto.innerText);
    colocarPonto = true;
})

mais.addEventListener('click', ()=>{
    operacao1 = true;
    if(vez == 0){
        numero1 = mostrador.innerText;
        vez = 1;
    }else{
        numero2 = mostrador.innerText;
        console.log(numero2)
        mostrador.innerText = soma(numero1, numero2);
    }
})

menos.addEventListener('click', ()=>{
    operacao1 = true;
    if(vez == 0){
        numero1 = mostrador.innerText;
        vez = 1;
    }else{
        numero2 = mostrador.innerText;
        console.log(numero2)
        mostrador.innerText = subtracao(numero1, numero2);
    }
})

apagar.addEventListener('click', ()=>{
    mostrador.innerText = 0;
})
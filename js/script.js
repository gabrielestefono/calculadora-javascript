let mostrador = document.getElementById('mostrador');
let historico = document.getElementById('historico');
let  apagar = document.getElementById('apagar');
let  inverter = document.getElementById('inverter');
let  divisao = document.getElementById('divisao');
let  porcentagem = document.getElementById('porcentagem');
let  vezes = document.getElementById('vezes');
let  menos = document.getElementById('menos');
let  mais = document.getElementById('mais');
let  ponto = document.getElementById('ponto');
let  igual = document.getElementById('igual');


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

mostrador.innerText =  0;

let numeros = new Array(btn0,btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9);

console.log(numeros);

numeros.forEach(numero => {
    numero.addEventListener('click', ()=>{
        if(mostrador.innerText == 0 & historico.innerText == ''){
            mostrador.innerText = numero.textContent;
        }else if(mostrador.innerText != 0){
            mostrador.innerText = mostrador.innerText + numero.textContent;
        }
    })
});

apagar.addEventListener('click', ()=>{
    mostrador.innerText = 0;
    historico.innerText = '';
})

inverter.addEventListener('click', ()=>{
    if(mostrador.innerHTML > 0){
        mostrador.innerHTML = mostrador.innerHTML * -1;
    }else{
        mostrador.innerHTML = mostrador.innerHTML * -1;
    }
})
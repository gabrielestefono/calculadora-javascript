let mostrador = document.getElementById('mostrador');
let apagar = document.getElementById('apagar');
let ponto = document.getElementById('ponto');
let mais = document.getElementById('mais');
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

let botoesNumeros = new Array(btn0,btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9);
colocarPonto = false;
mostrador.innerText = 0;



let mostrar = (valor)=>{
    
}

botoesNumeros.forEach(numero=>{
    numero.addEventListener('click', ()=>{
        mostrar(numero.innerText)
    })
})

apagar.addEventListener('click', ()=>{
    mostrador.innerText = 0;
})

ponto.addEventListener('click', ()=>{
    mostrar(ponto.innerText);
    colocarPonto = true;
})
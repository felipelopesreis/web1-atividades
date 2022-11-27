


import './nav.js'
import '../css/formapagamento.css'

const inputNumeroCartao = document.querySelector('#altTamanho')
const inputNomeCartao = document.querySelector('#altTamanho1')
const inputDataCartao = document.querySelector('#altTamanho2')
const divNumeroCartaoImg = document.querySelector('.card-number')
const divNomeCartao = document.querySelector('.card-holder')
const divDataCartao = document.querySelector('.expiration')

inputNumeroCartao.addEventListener('input', function(){
    divNumeroCartaoImg.innerHTML = inputNumeroCartao.value;
    divNomeCartao.innerHTML = inputCartao.value;
    divDataCartao.innerHTML = inputCartao.value;
})

inputNomeCartao.addEventListener('input', function(){
    divNomeCartao.innerHTML = inputNomeCartao.value;
})
inputDataCartao.addEventListener('input', function(){
    divDataCartao.innerHTML = inputDataCartao.value;
})
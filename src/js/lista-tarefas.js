import './nav.js'
import '../css/lista-tarefas.css'


let conteudoTarefa = document.querySelector('#input-nova-tarefa')
let botaoEnviar = document.querySelector('#btn-adicionar') 
let listaTarefa = document.querySelector('#lista-tarefas')
botaoEnviar.addEventListener('click',function(){
    let li = document.createElement('li')
    li.setAttribute('class','tarefa')
    li.innerHTML=` <div>${conteudoTarefa.value}</div>
    <buttom class ="btn-excluir">Excluir</buttom>`
    
    listaTarefa.appendChild(li)
});
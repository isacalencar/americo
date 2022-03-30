// perguntas frequentes // 

const perguntasDADO=document.querySelectorAll(' #perguntas-texto button ')
   
function ativarPergunta(event){
 const perguntas = event.currentTarget;
 const controls = perguntas.getAttribute('aria-controls')
 const res = document.getElementById(controls)
 res.classList.toggle("ativar")
 const ativa = res.classList.contains("ativar")
 perguntas.setAttribute('aria-expanded', ativa )

}
function eventosPerguntas(perguntas){
     perguntas.addEventListener('click', ativarPergunta)
}

perguntasDADO.forEach(eventosPerguntas)
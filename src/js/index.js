const botaoAlterarTema  = document.getElementById("botao-alterar-tema");

 const body = document.querySelector("body");
const body = document.querySelector("body");

 const imagembotaotrocadetema =document.querySelector(".imagem-botao")
 const imagembotaotrocadetema =document.querySelector(".imagem-botao")



 botaoAlterarTema.addEventListener("click", () =>{
 botaoAlterarTema.addEventListener("click", () =>{

const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

body.classList.toggle("modo-escuro");

if(modoEscuroEstaAtivo){
 const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
  imagembotaotrocadetema.setAttribute("src","./src/imagens/sun.png");

} else {





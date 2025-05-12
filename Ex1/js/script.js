function configurar(){
let execultarBtn = document.getElementById('execultarBtn');
if(execultarBtn instanceof HTMLButtonElement)
execultarBtn.addEventListener(`click`,validarNome)

}
function validarNome(){
   let nomeUsuario = document.getElementById('nomeUsuario');
   if(nomeUsuario instanceof HTMLInputElement){
    let nome = nomeUsuario.value;
    let expressaoRegular = /[^a-zÁ-ÿ \s]/g;

    if(expressaoRegular.test(nomeUsuario)){
        exibirMensagem("Nome Válido:" + nomeUsuario, "green");
    }else{
        exibirMensagem("Nome inválido. insira apenas ", "red");
    }
   }
}






















document.addEventListener('DOMContentLoaded', Configurar);
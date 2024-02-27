document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-sorteador').addEventListener('submit', function(event){
        event.preventDefault();
        let numeroMaximo= document.getElementById('numero_maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.floor(Math.random()*numeroMaximo)+1;
        
      

        //o innerText substitui apenas o conteudo
        //o innerHTML substitui com tags
        document.getElementById('resultado_sorteio').innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display = "block";
    })
})
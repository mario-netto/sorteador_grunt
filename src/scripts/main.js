document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(evento) {
        evento.preventDefault();
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo;
        numeroAleatorio = Math.floor(numeroAleatorio + 1); //+1 é para não sortear o numero 0, math arredonda para baixo
        
        document.getElementById('resultado-valor').innerText = numeroAleatorio
        document.querySelector  ('.resultado').style.display = 'block'
    })
})
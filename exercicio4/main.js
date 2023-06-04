
// declarando um numero aleatório
let numeroSecreto = Math.floor(Math.random() * 10) + 1; 

//pegando os elementos do html
const palpites = document.querySelector('.palpites')
var ultimoResultado = document.querySelector('.ultimoResultado');
var baixoOuAlto = document.querySelector('.baixoOUAlto')
const input = document.querySelector('#numero');

const btn__submit = document.querySelector('#submit');

//iniciando o numero de tentativas com 1 
let tentativas = 1



//adicionando ação ao botao, colocando a conferirPalpite dentro, não precisa de parenteses
btn__submit.addEventListener('click', conferirPalpite)


function conferirPalpite() {
    //capturando palpite do usuári e colocando number na frente, pra ter certeza que é um número
    var palpiteUsuario = Number(input.value);

    
    if (tentativas === 1) {
        palpites.textContent = 'Palpites anteriores: '
    }
    palpites.textContent += palpiteUsuario + ' ';

    //validar palpites
    if (palpiteUsuario === numeroSecreto) {
        ultimoResultado.textContent = 'Parabéns! Você acertou!';
        ultimoResultado.style.backgroundColor = 'green';
        configFimDeJogo()
        baixoOuAlto.textContent = '';
    } else if (tentativas === 3) {
        ultimoResultado.textContent = 'Fim de JOGO';
        configFimDeJogo()
    } else {
        ultimoResultado.textContent = 'Errado!';
        ultimoResultado.style.backgroundColor = 'red';

        if (palpiteUsuario < numeroSecreto) {
            baixoOuAlto.textContent = 'Seu palpite está muito baixo!';
        } else if (palpiteUsuario > numeroSecreto) {
            baixoOuAlto.textContent = 'Seu palpite está muito alto!';
        }
    }

    tentativas++;
    
    //apagando o palpite do input 
    input.value = '';
    //voltando o foco do input
    input.focus();

}

function configFimDeJogo() {
    palpites.disabled = true;
    btn__submit.disabled = true;
    botaoReinicio = document.createElement('button');
    botaoReinicio.textContent = 'Iniciar novo jogo';
    document.body.appendChild(botaoReinicio);
    botaoReinicio.addEventListener('click', reiniciarJogo);
  }

  function reiniciarJogo() {
    tentativas = 1;
  
    var reiniciarParas = document.querySelectorAll('.resultadoParas p');
    for (var i = 0 ; i < reiniciarParas.length ; i++) {
      reiniciarParas[i].textContent = '';
    }
  
    botaoReinicio.parentNode.removeChild(botaoReinicio);
  
    palpites.disabled = false;
    btn__submit.disabled = false;
    palpites.value = '';
    palpites.focus();
  
    ultimoResultado.style.backgroundColor = 'white';
  
    numeroSecreto = Math.floor(Math.random() * 10) + 1;
  }












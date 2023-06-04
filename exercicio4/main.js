let numeroSecreto = Math.floor(Math.random() * 10) + 1;;
console.log(numeroSecreto)
const numeroMenor = 1;
const numeroMaior = 10;

const conteudo = document.body;
const palpites = conteudo.querySelector('.palpites')
var ultimoResultado = document.querySelector('.ultimoResultado');
var baixoOuAlto = document.querySelector('.baixoOUAlto')
const input = document.querySelector('#numero');

let tentativas = 1

const btn__submit = document.querySelector('#submit');


btn__submit.addEventListener('click', conferirPalpite)


function conferirPalpite() {
    var palpiteUsuario = Number(input.value);

    if (tentativas === 1) {
        palpites.textContent = 'Palpites anteriores: '
    }
    palpites.textContent += palpiteUsuario + ' ';

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
    
    input.value = '';
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












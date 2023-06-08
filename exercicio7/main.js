const valores = document.querySelectorAll('button')
const input = document.querySelector('input')

//array para colocar os elementos da conta
let conta1 = []

// for each para percorrer todos os botoes e adicionar a função de click neles
valores.forEach(element => {
    element.addEventListener('click', evento => {
        // variavel conta para pegar o  valor do elemento clicado
        const conta = evento.target.textContent
        conta1.push(conta)
        //join transforma o array em uma string, passando em parametro o eu quero que divida os elementos, no meu caso um " "
        const Operacao = conta1.join('')

        input.value = Operacao
       
        //para resetar
        if(conta === 'C'){
            reset(conta1)
        }

        //o que fazer se o = for clicado
        if (conta === '=') {
            //remover o = para não aparecer no input
            const operacao2 = Operacao.substring(0, Operacao.length - 1)
            
            //eval para realizar a conta em string
            const resultado = eval(operacao2)

            //metodo para remover todos os dados de um array
            conta1.splice(0, conta1.length)
        
            input.value = resultado
            
            conta1.push(resultado)
        }

        if (conta === 'DEL'){
            //remover os ultimos caracteres da string, o 'DEL' mas o número desejado
            const operacao2 = Operacao.substring(0, Operacao.length - 4)

            input.value = operacao2

            conta1.splice(0, conta1.length)
            conta1.push(operacao2)
        }
        

    })
});


function reset(array) {
    input.value = ''
    array.splice(0,array.length)

}



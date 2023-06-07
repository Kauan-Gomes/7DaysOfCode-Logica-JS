const valores = document.querySelectorAll('button')
const input = document.querySelector('input')
console.log(input)

console.log(valores)

let conta1 = []

valores.forEach(element => {
    element.addEventListener('click', evento => {
        const conta = evento.target.textContent
        conta1.push(conta)
        const Operacao = conta1.join('')

        input.value = Operacao
       
        if(conta === 'Apagar'){
            reset(conta1)
        }

        if (conta === '=') {

            const operacao2 = Operacao.substring(0, Operacao.length - 1)
            

            const resultado = eval(operacao2)

            conta1.splice(0, conta1.length)
        
            conta1.push()
            input.value = resultado
            
            conta1.push(resultado)
        }

        

    })
});


function reset(array) {

    input.value = ''
    array.splice(0,array.length)


}



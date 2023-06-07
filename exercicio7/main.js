const valores = document.querySelectorAll('button')
const input = document.querySelector('input')
console.log(input)

console.log(valores)

const conta1 = []

valores.forEach(element => {
    element.addEventListener('click', evento => {
        const conta = evento.target.textContent

        conta1.push(conta)

        
        //console.log(conta1)

       
        
    })
});





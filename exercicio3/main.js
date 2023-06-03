const btn__iniciar = document.querySelector("#btn__iniciar");

btn__iniciar.addEventListener(("click"), function (e) {
    const conteudo = document.querySelector("body");

    const primeiroId = 1;
    const segundoId = 2;

    conteudo.innerHTML = `
    <div>
    <h2>Qual área você pretende seguir?</h2>
        <div>
            <button id="${primeiroId}">Front-End</button>
            <button id="${segundoId}">Back-end</button>
        </div>
    </div>
    `

    // console.log(btn_front.innerText)
    // console.log(btn_back.innerText)
    // console.log(button[1].innerText)

    const button = document.querySelectorAll('button')
    btn_front = document.getElementById(`${primeiroId}`)
    btn_back = document.getElementById(`${segundoId}`)


    for (var i = 0; i < button.length; i++) {
        button[i].addEventListener("click", function (e) {

            const area = e.target.innerText

            if (area === btn_front.innerText) {

                conteudo.innerHTML = `
                    <div>
                    <h2>O que pretende estudar?</h2>
                        <div>
                            <button id="${primeiroId}">React</button>
                            <button id="${segundoId}">Vue</button>
                        </div>
                    </div>
                    `;

                const btn__novo = conteudo.querySelectorAll('button')
                seguirFuturo(btn__novo);



            } else if (area === btn_back.innerText) {
                conteudo.innerHTML = `
                    <div>
                    <h2>Qual linguagem você pretende seguir?</h2>
                        <div>
                            <button id="${primeiroId}">Java</button>
                            <button id="${segundoId}">C#</button>
                        </div>
                    </div>
                    `;

                const btn__novo = conteudo.querySelectorAll('button')
                seguirFuturo(btn__novo);


            }
        })




    }

    const seguirFuturo = (botao) => {
        for (var i = 0; i < botao.length; i++) {
            botao[i].addEventListener("click", evento => {

                const conteudoNovo = conteudo.innerHTML = `
                    <div>
                    <h2>Qual serão os passos daqui pra frente?</h2>
                        <div>
                            <button id="${primeiroId}">Seguir se especializando na área escolhida</button>
                            <button id="${segundoId}">Seguir se desenvolvendo para se tornar Fullstack</button>
                        </div>
                    </div>
                    `
                const buttonNovo = conteudo.querySelectorAll('button')
                proximosCursos(buttonNovo)


            })
        }

        const proximosCursos = (botao => {
            for (var i = 0; i < botao.length; i++) {
                botao[i].addEventListener("click", evento => {
                    conteudo.innerHTML = `
                        <div>
                        <h2>Quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer?</h2>
                        <label for="nome">Nome</label>
                        <input type="text" name="nome" id="input">
                        <button id="${primeiroId}">Adicionar Cursos +</button>
                            <ul>
                            </ul>
                        </div>
                        `
                    const btn__adicionar = conteudo.querySelector('button')

                    adicionarCurso(btn__adicionar);

                })

            }

        })

    }

    function adicionarCurso(botao) {
        botao.addEventListener("click", evento => {
            evento.preventDefault();

            const input = conteudo.querySelector('#input')
            valorInput = input.value

            elemento_pai = conteudo.querySelector('ul')
            const novoItem = document.createElement("li")

            elemento_pai.appendChild(novoItem, novoItem.innerText = valorInput)

        })
    }


})
const botao = document.querySelectorAll('button');
let conteudo = document.body
let conteudoPadrao = conteudo


//arrays para adicionar os itens a essas categorias

const frutas = []
const lat = []
const congelados = []
const doces = []



//função para voltar pra tela principal
function telaPrincipal(){

    const adicionartela = `
    <h1>deseja adicionar itens a sua lista de compras</h1>
    <button id="btn_sim">Sim</button>
    <button id="btn_nao">Não</button>
    `

    conteudo.innerHTML = adicionartela

    const btnSim = conteudo.querySelector('#btn_sim');
    const btnNao = conteudo.querySelector('#btn_nao');

    btnSim.addEventListener('click', evento => {
        
        const decisao = evento.target.textContent;
        
            const opcoesDeAdicionar = `
            <label for="produto">Qual o Produto?</label>
            <input type="text" id="produto">
            <select id="categoria">
                <option value=""></option>
                <option value="frutas">frutas</option>
                <option value="lat">laticínios</option>
                <option value="congelados">congelados</option>
                <option value="doces">doces</option>
            </select>
            <input type="submit" value="enviar" id="enviar">
            `;
            conteudo.innerHTML = opcoesDeAdicionar;
            const btn_enviar = conteudo.querySelector('#enviar');
            btn_enviar.addEventListener('click', adicionarItem);
        
    });

    btnNao.addEventListener('click', evento => {

        //criando ul e colocando no body
        const listaFrutas = document.createElement('ul')
        listaFrutas.textContent = 'Setor de frutas:'
        document.body.appendChild(listaFrutas);

        for (let i = 0; i < frutas.length; i++) {
            const elementos = document.createElement('li');
            elementos.textContent = frutas[i]

            const btn_remover = document.createElement('button')
            btn_remover.textContent = 'X'
            listaFrutas.appendChild(elementos);
            elementos.appendChild(btn_remover)
            elementos.classList.add('item_lista')

            removeritem(btn_remover, elementos)
        }



        const listaLaticinios = document.createElement('ul')
        listaLaticinios.textContent = 'Setor de laticínios:'
        document.body.appendChild(listaLaticinios);
        for (let i = 0; i < lat.length; i++) {
            
            const elementos = document.createElement('li');
            elementos.textContent = lat[i];

            const btn_remover = document.createElement('button')
            btn_remover.textContent = 'X'
            listaLaticinios.appendChild(elementos);
            elementos.appendChild(btn_remover);
            elementos.classList.add('item_lista')

            removeritem(btn_remover, elementos)
        }


        const listaCongelados = document.createElement('ul')
        listaCongelados.textContent = 'Setor de congelados:'
        document.body.appendChild(listaCongelados);
        for (let i = 0; i < congelados.length; i++) {
            
            const elementos = document.createElement('li');
            elementos.textContent = congelados[i];

            const btn_remover = document.createElement('button')
            btn_remover.textContent = 'X'
            listaCongelados.appendChild(elementos);
            elementos.appendChild(btn_remover);
            elementos.classList.add('item_lista')

            removeritem(btn_remover, elementos)
        }



        const listaDoces = document.createElement('ul')
        listaDoces.textContent = 'Setor de doces:'
        document.body.appendChild(listaDoces);
        for (let i = 0; i < doces.length; i++) {
            
            const elementos = document.createElement('li');
            elementos.textContent = doces[i];

            const btn_remover = document.createElement('button')
            btn_remover.textContent = 'X'
            listaDoces.appendChild(elementos);
            elementos.appendChild(btn_remover);
            elementos.classList.add('item_lista')

            removeritem(btn_remover, elementos)
        }
    });
    
}


    
for (let i = 0; i < botao.length; i++) {
            botao[i].addEventListener('click', evento => {
                 
                const decisao = evento.target.textContent;
        
                if(decisao === 'Sim'){
                    
                    
                    const opcoesDeAdicionar = `
                    <label for="produto">Qual o Produto?</label>
                    <input type="text" id="produto">
                    <select id="categoria">
                        <option value=""></option>
                        <option value="frutas">frutas</option>
                        <option value="lat">laticínios</option>
                        <option value="congelados">congelados</option>
                        <option value="doces">doces</option>
                    </select>
                    <input type="submit" value="enviar" id="enviar">
                    `
        
                    conteudo.innerHTML = opcoesDeAdicionar;
        
                    const btn_enviar = conteudo.querySelector('#enviar')
                    
                    btn_enviar.addEventListener('click', adicionarItem)
                    
                    
        
                } if(decisao === 'Não'){
                    const listaFrutas = document.createElement('h2')
                    listaFrutas.textContent = 'Não possui itens de compra:'
                    document.body.appendChild(listaFrutas);
                }
                
                
            })
            
        }
    
    




function adicionarItem (){
    
    let item = document.querySelector('#produto').value 
    let categorias = document.querySelector('#categoria').value
    
    //validação para saber com qual categoria o item está associado
    if(categorias === 'frutas'){
        //após ser validado, adicionar o item no array, por meio da função push()
        frutas.push(item)
    }else if(categorias === 'lat'){
        lat.push(item)
    }else if(categorias === 'congelados'){
        congelados.push(item)
    }else if(categorias === 'doces'){
        doces.push(item)
    }

    telaPrincipal()
    
}

 //função para remover item
function removeritem (botao,elementos){

    botao.addEventListener("click", evento =>{
        let valor = elementos.textContent
        
        //split remove o valor que está no parametro, se estiver sem nada remove os espaços, e transforma em arrays
        valor = valor.split('X')
        //por causa do split ficou um array de dois elementos[elemento,""], usei o pop para remover esse ultimo 
        valor.pop()
        valorNovo = valor[0]
        
        //a função indexOF() busca no array o valor passado em parametro, retornando a posição do mesmo, caso não seja encontrado a função retorna -1
        var indexFrutas = frutas.indexOf(valorNovo) 
        var indexCongelados = congelados.indexOf(valorNovo)
        var indexDoces = doces.indexOf(valorNovo)
        var indexLatnicios = lat.indexOf(valorNovo)


        //validação para poder remover os itens de compras nos arrays, caso o indexOF encontre o elemento, o valor será diferente de -1,
        if(indexFrutas != -1){
            //splice remove elementos do array, sendo o primeiro valor a posição a ser removida, e o segundo valor a quantidade de elementos
            frutas.splice(indexFrutas, 1)
        }
        if(indexCongelados != -1){
            congelados.splice(indexCongelados, 1)
        }
        if(indexDoces != -1){
            doces.splice(indexDoces, 1)
            
        }
        if(indexLatnicios != -1){
            lat.splice(indexLatnicios, 1)
            
        }


        //Para remover os elementos do DOM, o parentNode acessa o Pai, e com removeChild é possivel remover o filho, que no caso é o proprío elemento
        elementos.parentNode.removeChild(elementos)

    })
}





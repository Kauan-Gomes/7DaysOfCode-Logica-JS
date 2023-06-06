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
    
    
    if(categorias === 'frutas'){
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


function removeritem (botao,elementos){

    botao.addEventListener("click", evento =>{
        let valor = elementos.textContent
        
        valor = valor.split('X')
        valor.pop()
        valorNovo = valor[0]
        

        var indexFrutas = frutas.indexOf(valorNovo) 
        var indexCongelados = congelados.indexOf(valorNovo)
        var indexDoces = doces.indexOf(valorNovo)
        var indexLatnicios = lat.indexOf(valorNovo)

        const filtroFruta = frutas.find(element => element = valorNovo)
        const filtroCongelados = congelados.find(element => element = valorNovo)
        const filtroDoces = doces.find(element => element = valorNovo)
        const filtroLat = lat.find(element => element = valorNovo)
        
        console.log(frutas)
        console.log(congelados)
        console.log(doces)
        console.log(lat)

        if(filtroFruta != -1){
            frutas.splice(indexFrutas, 1)
            console.log(frutas)
        }
        if(filtroCongelados != -1){
            congelados.splice(indexCongelados, 1)
        }
        if(filtroDoces != -1){
            doces.splice(indexDoces, 1)
            
        }
        if(filtroLat != -1){
            lat.splice(indexLatnicios, 1)
            
        }

        elementos.nodeParent.removeChild(elementos)

    })




}





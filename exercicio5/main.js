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
        const listaFrutas = document.createElement('ul')
        listaFrutas.textContent = 'Setor de frutas:'
        document.body.appendChild(listaFrutas);
        for (let i = 0; i < frutas.length; i++) {
            
            const elementos = document.createElement('li');
            elementos.textContent = frutas[i] 
            listaFrutas.appendChild(elementos);
            
        }



        const listaLaticinios = document.createElement('ul')
        listaLaticinios.textContent = 'Setor de laticínios:'
        document.body.appendChild(listaLaticinios);
        for (let i = 0; i < lat.length; i++) {
            
            const elementos = document.createElement('li');
            elementos.textContent = lat[i] 
            listaLaticinios.appendChild(elementos);

        }


        const listaCongelados = document.createElement('ul')
        listaCongelados.textContent = 'Setor de congelados:'
        document.body.appendChild(listaCongelados);
        for (let i = 0; i < congelados.length; i++) {
            
            const elementos = document.createElement('li');
            elementos.textContent = congelados[i];
            listaCongelados.appendChild(elementos);
        }



        const listaDoces = document.createElement('ul')
        listaDoces.textContent = 'Setor de doces:'
        document.body.appendChild(listaDoces);
        for (let i = 0; i < doces.length; i++) {
            
            const elementos = document.createElement('li');
            elementos.textContent = doces[i];
            listaDoces.appendChild(elementos);
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







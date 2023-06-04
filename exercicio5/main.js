const botao = document.querySelectorAll('button');
let conteudo = document.body
let conteudoPadrao = conteudo
console.log(conteudo)


const frutas = []
const lat = []
const conge = []
const doces = []






function telaPrincipal(){

    console.log('estou na tela principal')
    
    const adicionartela = `
    <h1>deseja adicionar itens a sua lista de compras</h1>
    <button id="btn_sim">Sim</button>
    <button id="btn_nao">Não</button>
    `

    conteudo.innerHTML = adicionartela

    const btnSim = conteudo.querySelector('#btn_sim');
    const btnNao = conteudo.querySelector('#btn_nao');

    btnSim.addEventListener('click', evento => {
        console.log('cliquei');
        const decisao = evento.target.textContent;
        if (decisao === 'Sim') {
            console.log('cliquei no sim');
            const opcoesDeAdicionar = `
            <label for="produto">Qual o Produto?</label>
            <input type="text" id="produto">
            <select id="categoria">
                <option value=""></option>
                <option value="frutas">frutas</option>
                <option value="lat">laticínios</option>
                <option value="cong">congelados</option>
                <option value="doces">doces</option>
            </select>
            <input type="submit" value="enviar" id="enviar">
            `;
            conteudo.innerHTML = opcoesDeAdicionar;
            const btn_enviar = conteudo.querySelector('#enviar');
            btn_enviar.addEventListener('click', adicionarItem);
        }
    });

    btnNao.addEventListener('click', evento => {
        console.log('cheguei até o não');
    });
    
}


    
for (let i = 0; i < botao.length; i++) {
            botao[i].addEventListener('click', evento => {
                 
                console.log('cliquei')
                const decisao = evento.target.textContent;
        
                if(decisao === 'Sim'){
                    
                    console.log('cliquei no sim')
                    const opcoesDeAdicionar = `
                    <label for="produto">Qual o Produto?</label>
                    <input type="text" id="produto">
                    <select id="categoria">
                        <option value=""></option>
                        <option value="frutas">frutas</option>
                        <option value="lat">laticínios</option>
                        <option value="cong">congelados</option>
                        <option value="doces">doces</option>
                    </select>
                    <input type="submit" value="enviar" id="enviar">
                    `
        
                    conteudo.innerHTML = opcoesDeAdicionar;
        
                    const btn_enviar = conteudo.querySelector('#enviar')
                    
                    btn_enviar.addEventListener('click', adicionarItem)
                    
                    
        
                } if(decisao === 'Não'){
                    console.log('cheguei até o não')
                }
                
                
            })
            
        }
    
    




function adicionarItem (){
    
    let item = document.querySelector('#produto').value 
    let categorias = document.querySelector('#categoria').value
    
    if(categorias === 'frutas'){
        frutas.push(item)
        console.log(frutas)
        
    }else if(categorias === 'laticínios'){
        lat.push(item)
    }else if(categorias === 'congelados'){
        conge.push(item)
    }else if(categorias === 'doces'){
        doces.push(item)
    }

    console.log('adicionou item')

    telaPrincipal()
    
    console.log('voltou para a tela principal')
}







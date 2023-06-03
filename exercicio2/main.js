// - Qual o seu nome?
// - Quantos anos você tem?
// - Qual linguagem de programação você está estudando?
// "Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"


const btn_submit = document.querySelector("#cadastrar")


btn_submit.addEventListener("click", function(e){
    e.preventDefault();
    
    const nome = document.querySelector("#nome");
    const valorNome = nome.value;
    
    const idade = document.querySelector("#idade");
    const valorIdade = idade.value;

    const linguagem = document.querySelector("#linguagem");
    const valorLinguagem = linguagem.value;

    console.log(valorNome);
    console.log(valorIdade);
    console.log(valorLinguagem);

    const conteudo = document.querySelector(".apresentacao").innerHTML = `
    <div>
    <h2>Olá ${valorNome}, você tem ${valorIdade} anos e já está aprendendo ${valorLinguagem}!
    </h2>
    </div>
    `
 


})
    
    
    



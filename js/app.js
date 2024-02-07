let incluidos = document.getElementById('lista-amigos');
let listaDeAmigos = [];

function adicionar(){
    //Receber os nomes
    //adicionar os nomes a lista de amigos 
    let nomes = document.getElementById('nome-amigo').value;
    console.log(nomes);

    listaDeAmigos.push(" " + nomes);
    console.log(listaDeAmigos);

    incluidos.innerHTML = listaDeAmigos;

    //limpar campo para escrever os nomes 
    document.getElementById('nome-amigo').value = "";
}

function sortear(){
    //juntar os nomes por sorteios 
    //Evitar repetidos e sortar a si mesmo
    
    
}

function reiniciar(){
    //Apagar a lista de amigos 
    document.getElementById('lista-amigos').textContent = "";
    listaDeAmigos = [];
    
}
let amigos = [];

function adicionar(){
    //Receber os nomes
    //adicionar os nomes a lista de amigos 
    let nomes = document.getElementById('nome-amigo').value;
    let incluidos = document.getElementById('lista-amigos');
    console.log(nomes);

    let verificarAmigos = amigos.map(p => p.toUpperCase());
    console.log(verificarAmigos);

    if(verificarAmigos.includes(nomes.toUpperCase())){
        alert("Ops! Parece que foram adicionados nomes iguais. Você pode optar por sobrenomes ou um apelido carinhoso para a diferenciação. ;)")
    }else if(nomes.trim() == ""){
        alert("Ops! Nenhum nome foi identificado para ser adicionado. Tente novamente.")
    }else{
        amigos.push(nomes);

        if (incluidos.textContent == ""){
            incluidos.textContent = nomes;
        }else{
            incluidos.textContent = incluidos.textContent + ', ' + nomes;
        }
    
    }

    //limpar campo para escrever os nomes 
    document.getElementById('nome-amigo').value = "";
}

function sortear(){
    //juntar os nomes por sorteios 
    //Evitar repetidos e sortar a si mesmo
    document.getElementById('lista-sorteio').innerHTML = "";
    
    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');

    if (amigos.length < 4) {
        alert("É necessario pelo menos 4 pessoas para fazer um sorteio");
        return;
    }
    
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
            }
    }

    
}
function reiniciar(){
    //Apagar a lista de amigos 
    amigos = [];
    document.getElementById('lista-amigos').textContent = "";
    document.getElementById('lista-sorteio').innerHTML = "";
    
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function ativarBotao(){

}
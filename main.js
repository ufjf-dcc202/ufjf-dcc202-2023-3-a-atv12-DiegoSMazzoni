//main.js

import { getEstoque, transacaoNoEstoque, limpaEstoque} from "./estoque.js";

document.entrada.addEventListener('submit', leFormulario);
//leFormulario()

//imprime

const olJoao = document.querySelector("#joao");
const olMaria = document.querySelector("#maria");

atualizaTela();

function leFormulario(event) {
    event.preventDefault();
    const fruta = document.entrada.fruta.value;
    const quantidade = document.entrada.quantidade.valueAsNumber;
    const origem = document.entrada.origem.value;
    const destino = document.entrada.destino.value;

    console.log(`Solicitado: ${origem} doa ${quantidade} ${fruta} para ${destino}`);
    //document.entrada.submit();
    transacaoNoEstoque (origem, destino, fruta, quantidade);
    atualizaTela();
}

function atualizaTela(){
    const estoque = getEstoque();
    document.entrada.fruta.value = "maca"
    document.entrada.quantidade.value = 1
    preencheListaPessoa(estoque['joao'], olJoao);
    preencheListaPessoa(estoque['maria'], olMaria);

}

function preencheListaPessoa(pessoa, lista){
    lista.innerHTML = "";
    
    if(Array.isArray(pessoa)) {
        for(let i = 0; i < pessoa.length; i++){
            const monte = pessoa[i];
            const eLi = document.createElement('li');
            eLi.innerText = `${monte.tipo}: ${monte.quantidade}`;
            lista.append(eLi);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('limparEstoque').addEventListener('click', () => {
        limpaEstoque()
        atualizaTela()
    })
})
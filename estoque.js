//estoque.js
let estoque = { 
 'joao': [   
    {'tipo': "maca", 'qtd': 1},
    {'tipo': "pera", 'qtd': 1},
],
 'maria': [ 
    {'tipo': "maca", 'qtd': 2},
    {'tipo': "banana", 'qtd': 4},
 ]
};

export function getEstoque(){
    return structuredClone(estoque);
}

export function transacao(origem, destino, quantidade, fruta){
    if(origem === 'pomar'){
        const pessoa = estoque[destino];
        let monte;
        for(let i = 0; i < pessoa.length; i++){
            if(pessoa[i].tipo === fruta){
                monte = pessoa[i];
                break;
            }
        }

        if(!monte){
            monte = {'tipo': fruta, 'qtd': 0};
            pessoa.push(monte);
        }
        monte.qtd += quantidade;
        return;
        }
    }

// export {getEstoque}
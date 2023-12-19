//estoque.js
let estoque = { 
 'joao': [   
    {'tipo': "maca", 'quantidade': 1},
],
 'maria': [ 
    {'tipo': "maca", 'quantidade': 2},
 ]
};

export function getEstoque(){
    return structuredClone(estoque);
}

export function transacaoNoEstoque(origem, destino, quantidade, fruta){
    if(origem === destino) { return; }
    if(quantidade <= 0){
        return;
    }
    if(origem === 'pomar'){
        dePomarParaPessoa(destino, quantidade, fruta);
    }
        
    if(destino === "pomar"){
        dePessoaParaPomar(origem, quantidade, fruta);   
    }
    if(origem === 'joao'){
        deJoaoParaPessoa(destino, quantidade, fruta);
    }
        
    if(destino === "joao"){
        dePessoaParaJoao(origem, quantidade, fruta);   
    }
    if(origem === 'maria'){
        deMariaParaPessoa(destino, quantidade, fruta);
    }
        
    if(destino === "maria"){
        dePessoaParaMaria(origem, quantidade, fruta);   
    }
    
}

function dePessoaParaPomar(origem, quantidade, fruta){
    const pessoa = estoque[origem];
            let monte;
            for(let i = 0; i < pessoa.length; i++){
                if(pessoa[i].tipo === fruta){
                    monte = pessoa[i];
                    break;
                }
            }    
        if(!monte){
            return;
        }
        monte.quantidade -= Math.min(quantidade, monte.quantidade); 

}

function dePomarParaPessoa(destino, quantidade, fruta){
    const pessoa = estoque[destino];
        let monte;
        for(let i = 0; i < pessoa.length; i++){
            if(pessoa[i].tipo === fruta){
                monte = pessoa[i];
                break;
            }
        }
        if(!monte){
            monte = {'tipo': fruta, 'quantidade': 0};
            pessoa.push(monte);
        }
        monte.quantidade += quantidade;
        return;
}

function dePessoaParaJoao(origem, quantidade, fruta){
    const pessoa = estoque[origem];
            let monte;
            for(let i = 0; i < pessoa.length; i++){
                if(pessoa[i].tipo === fruta){
                    monte = pessoa[i];
                    break;
                }
            }    
        if(!monte){
            return;
        }
        monte.quantidade -= Math.min(quantidade, monte.quantidade); 

}

function deJoaoParaPessoa(destino, quantidade, fruta){
    const pessoa = estoque[destino];
        let monte;
        for(let i = 0; i < pessoa.length; i++){
            if(pessoa[i].tipo === fruta){
                monte = pessoa[i];
                break;
            }
        }
        if(!monte){
            monte = {'tipo': fruta, 'quantidade': 0};
            pessoa.push(monte);
        }
        monte.quantidade += quantidade;
        return;
}

function dePessoaParaMaria(origem, quantidade, fruta){
    const pessoa = estoque[origem];
            let monte;
            for(let i = 0; i < pessoa.length; i++){
                if(pessoa[i].tipo === fruta){
                    monte = pessoa[i];
                    break;
                }
            }    
        if(!monte){
            return;
        }
        monte.quantidade -= Math.min(quantidade, monte.quantidade); 

}

function deMariaParaPessoa(destino, quantidade, fruta){
    const pessoa = estoque[destino];
        let monte;
        for(let i = 0; i < pessoa.length; i++){
            if(pessoa[i].tipo === fruta){
                monte = pessoa[i];
                break;
            }
        }
        if(!monte){
            monte = {'tipo': fruta, 'quantidade': 0};
            pessoa.push(monte);
        }
        monte.quantidade += quantidade;
        return;
}

export function limpaEstoque(){
    estoque = {}
}

// export {getEstoque}
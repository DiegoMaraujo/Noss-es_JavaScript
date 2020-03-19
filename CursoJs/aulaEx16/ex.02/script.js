let nu  = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res   = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}


function adiciona(){
    if(isNumero(nu.value) && !inLista(nu.value, valores)){//!NÃO ESTA NA LISTA
       valores.push(Number(nu.value))
       let item = document.createElement('option')
       item.text = `valor ${nu.value} adicionado`
       lista.appendChild(item)
       res.innerHTML = ''
    }else{
        window.alert('valor invalido ou ja encontrado na lista')
    }
    nu.value =''//apagar lista local
    nu.focus()
}
function finalizar(){
    if (valores.length == 0){
        window.alert('Adicione um valores antes de finalizar')
    }else{
        let tot   = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma  = 0
        let media = 0
        for(let pos in valores){
            
            soma += valores[pos] //soma dos valores
            
            if(valores[pos] > maior)//maior valor
            maior = valores[pos]
            if(valores[pos] < menor)//menor valor
            menor = valores[pos]
        }
        media = soma / tot//calculo da media
        
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>Maior valor informado foi ${maior} .</p>`
        res.innerHTML += `<p>Menor valor informado foi ${menor} .</p>`
        res.innerHTML += `<p>A soma dos valores são ${soma} .</p>`
        res.innerHTML += `<p>A Media das soma dos valores são ${media} .</p>`
    }
}
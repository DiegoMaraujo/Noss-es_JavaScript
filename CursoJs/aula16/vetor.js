
let num =[5,3,4,8]
/*
num[4]=7//acrecetando o valor no vetor num
num.push(8)//acrecetando o valor no vetor num
num.length//lentos os elementos no vetor num
//num.sort()
console.log(num)
console.log(`Vetor ${num.length} posição` )
console.log(` o primeiro numeo do vetor é ${num[0]}`)
*/
let pos = num.indexOf(10)//buscando o valor na posição do vetor

if(pos == -1){
    console.log(`O valor não foi encontrado`)
}else{
    console.log(`O valor 8 esta na posição ${pos} `)
}


/*
let valor = [8, 1, 7, 4, 2, 9]
valor.sort()
/*
for(let pos = 0; pos < valor.length; pos++){
    console.log(`A posição ${pos} tem os valores ${valor[pos]}`)
}
for(let pos in valor){
    console.log(`A posição ${pos} tem os valores ${valor[pos]}`)
}
*/
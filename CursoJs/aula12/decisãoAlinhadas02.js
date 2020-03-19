var idade = 66
if(idade < 16){
    console.log(`Você Não Vota ${idade}`)
}else if( idade < 18 || idade > 65){
    console.log(`Seu voto é opcional ${idade}`)    
}else{
    console.log(`Seu voto é obrigatorio ${idade}`)
}
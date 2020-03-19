function verifica(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtAno')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Erro Verefique os dados e tente novamente !')
    }else{
        var fsex = document.getElementsByName('radSex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `idade calculada ${idade}` verificação
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','')
        if(fsex[0].checked){
            genero ='Homem'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src','imagens/criancaM.jpg')

            }else if(idade < 21){
                //jovens
                img.setAttribute('src','imagens/jovemH.jpg')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src','imagens/adultoH.jpg')
            }else{
                //idoso
                img.setAttribute('src','imagens/velhoH.jpg')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src','imagens/criancaF.jpg')

            }else if(idade < 21){
                //jovens
                img.setAttribute('src','imagens/jovemM.jpg')

            }else if(idade < 50){
                //Adulto
                img.setAttribute('src','imagens/adultoM.jpg')
            }else{
                //idoso
                img.setAttribute('src','imagens/velhaM.jpg')
            }
        }
        res.style.textAlign = 'center' //centralizando a mensagem
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)//caregando um elemento
    }

}
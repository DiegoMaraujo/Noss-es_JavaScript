function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0){
        window.alert('por favor digite um numero')   
    }else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML =''
        /*
        utilizando o for para a tabuata
        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text =`${n} x ${c} = ${n*c}`
            item.value =`tab${c}`
            tab.appendChild(item)
        }
        */
      //utilizando o for para a enquanto
         while(c <= 10){
            let item = document.createElement('option')
            item.text =`${n} x ${c} = ${n*c}`
            item.value =`tab${c}`
            tab.appendChild(item)
            c++
         }
    }
}
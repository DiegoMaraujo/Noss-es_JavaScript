//RECURSIVA
function fatorial(n){
    if(n ==1){
        return 1
    }else{
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))
//5! = 5x 4x 3x 2 x 1
let cartaoatual = 0
let cartaoselecionado = document.getElementById('selecionado')
function avancar(){
    var cartoes = document.querySelectorAll('.Bosses')
    console.log(cartoes[cartaoatual])
    cartaoatual += 1
    if( cartaoatual > 23){
        cartaoatual = 0
    }
    cartoes[cartaoatual-1].removeAttribute('id')
    cartoes[cartaoatual].setAttribute('id', 'selecionado')
}
function voltar(){
    var cartoes = document.querySelectorAll('.Bosses')
    console.log(cartoes[cartaoatual])
    cartaoatual -= 1
    if( cartaoatual < 0){
        cartaoatual = 23
    } 
    cartoes[cartaoatual + 1].removeAttribute('id')
    cartoes[cartaoatual].setAttribute('id', 'selecionado')
}
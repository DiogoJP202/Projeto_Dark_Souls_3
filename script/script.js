let cartaoatual = 0
let cartaoselecionado = document.getElementById('selecionado')
function avancar(){
    if(cartaoatual > 23){
        window.alert('Fim Da Lista!') 
        cartaoatual = 23
    } else {
    var cartoes = document.querySelectorAll('.Bosses')
    console.log(cartoes[cartaoatual])
    cartaoatual += 1
    cartoes[cartaoatual-1].removeAttribute('id')
    cartoes[cartaoatual].setAttribute('id', 'selecionado')
} 
}
function voltar(){
    if(cartaoatual < 1){
        window.alert('Começo Da Lista!') 
        cartaoatual = 0
    } else{
    var cartoes = document.querySelectorAll('.Bosses')
    console.log(cartoes[cartaoatual])
    cartaoatual -= 1
    cartoes[cartaoatual + 1].removeAttribute('id')
    cartoes[cartaoatual].setAttribute('id', 'selecionado')
}
}
let botãoV = document.getElementById('voltar').addEventListener('touchstart', () => { 
    if(cartaoatual < 1){
        window.alert('Começo Da Lista!') 
        cartaoatual = 0
    } else{
    var cartoes = document.querySelectorAll('.Bosses')
    console.log(cartoes[cartaoatual])
    cartaoatual -= 1
    cartoes[cartaoatual + 1].removeAttribute('id')
    cartoes[cartaoatual].setAttribute('id', 'selecionado')
}
})
let botãoP = document.getElementById('proximo').addEventListener('touchstart', () => {
if(cartaoatual > 23){
        window.alert('Fim Da Lista!') 
        cartaoatual = 23
    } else {
    var cartoes = document.querySelectorAll('.Bosses')
    console.log(cartoes[cartaoatual])
    cartaoatual += 1
    cartoes[cartaoatual-1].removeAttribute('id')
    cartoes[cartaoatual].setAttribute('id', 'selecionado')
} 
})

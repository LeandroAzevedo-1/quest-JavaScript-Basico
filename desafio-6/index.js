//Função Soma 
function somar(numero1,numero2){
    const soma = numero1 + numero2;
    return ( "A soma dos dois números é: " + soma)
}
soma = somar(10 , 3)
console.log(soma)

//função subtração
function subtracao(numero1, numero2){
    const subtrair = numero1 - numero2;
    return ( "A subtração dos dois números é: " + subtrair)
}
subtrair = subtracao(10, 3)
console.log(subtrair)

//função divisao 
function divisao(numero1, numero2) {
    let dividir = numero1 / numero2;
    return ('A divisão dos dois números é: ' + dividir);
}
dividir = divisao(10 , 2)
console.log(dividir)

//função multiplicação
function multipicacao(numero1, numero2) {
    let multiplicar = numero1 * numero2;
    return ('A multiplicação dos dois números é: ' + multiplicar);
}
multiplicar = multipicacao(10, 2)
console.log(multiplicar)

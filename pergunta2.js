const isInFibonacci = (x) => {
    let startValueX = 0
    let startValueY = 1
    let message = ''

    let aux = 0
    while(1){
        if(startValueY > x && x != 0){
            message = `O número ${x} não pertence a sequência de Fibonacci`
            break
        }
        if (startValueY == x || x == 0){
            message = `O número ${x} pertence a sequência de Fibonacci`
            break
        }

        aux = startValueY
        startValueY = startValueX + startValueY
        startValueX = aux
    }

    return message
}
console.log(isInFibonacci(5));
const data = [
    {
        "dia": 1,
        "valor": 22174.1664
    },
    {
        "dia": 2,
        "valor": 24537.6698
    },
    {
        "dia": 3,
        "valor": 26139.6134
    },
    {
        "dia": 4,
        "valor": 0.0
    },
    {
        "dia": 5,
        "valor": 0.0
    },
    {
        "dia": 6,
        "valor": 26742.6612
    },
    {
        "dia": 7,
        "valor": 0.0
    },
    {
        "dia": 8,
        "valor": 42889.2258
    },
    {
        "dia": 9,
        "valor": 46251.174
    },
    {
        "dia": 10,
        "valor": 11191.4722
    },
    {
        "dia": 11,
        "valor": 0.0
    },
    {
        "dia": 12,
        "valor": 0.0
    },
    {
        "dia": 13,
        "valor": 3847.4823
    },
    {
        "dia": 14,
        "valor": 373.7838
    },
    {
        "dia": 15,
        "valor": 2659.7563
    },
    {
        "dia": 16,
        "valor": 48924.2448
    },
    {
        "dia": 17,
        "valor": 18419.2614
    },
    {
        "dia": 18,
        "valor": 0.0
    },
    {
        "dia": 19,
        "valor": 0.0
    },
    {
        "dia": 20,
        "valor": 35240.1826
    },
    {
        "dia": 21,
        "valor": 43829.1667
    },
    {
        "dia": 22,
        "valor": 18235.6852
    },
    {
        "dia": 23,
        "valor": 4355.0662
    },
    {
        "dia": 24,
        "valor": 13327.1025
    },
    {
        "dia": 25,
        "valor": 0.0
    },
    {
        "dia": 26,
        "valor": 0.0
    },
    {
        "dia": 27,
        "valor": 25681.8318
    },
    {
        "dia": 28,
        "valor": 1718.1221
    },
    {
        "dia": 29,
        "valor": 13220.495
    },
    {
        "dia": 30,
        "valor": 8414.61
    }
]


const bigger = () => {
    let dia = data[0].dia
    let valor = data[0].valor
    data.forEach((item) => {
        if (item.valor > valor) {
            dia = item.dia
            valor = item.valor
        }
    })
    return { dia, valor }
}

const smaller = () => {
    let dia = data[0].dia
    let valor = data[0].valor
    data.forEach((item) => { //aqui desconsidero os dias em que não houve faturamento
        if (item.valor > 0 && item.valor < valor) {
            dia = item.dia
            valor = item.valor
        }
    })
    return { dia, valor }
}
const mediaDays = () => {
    let diasSemFaturamento = 0
    let somaValores = 0

    data.forEach((item) => {
        somaValores = somaValores + item.valor
        if (item.valor == 0) diasSemFaturamento++
    })

    let mediaValor = somaValores / (data.length - diasSemFaturamento)

    const result = []
    data.forEach((item) => { if (item.valor > mediaValor) result.push(item.dia) })
    return result
}

const results = () => {
    const maior = bigger()
    const menor = smaller()
    const mediaValores = mediaDays()

    let message = `Dia com maior Faturamento: ${maior.dia} => Faturamento: ${maior.valor} \nDia com menor Faturamento: ${menor.dia} => Faturamento: ${menor.valor} \nDias acima da média:`

    mediaValores.forEach((item)=>{
        message = message + ` ${item},`
    })

    return message
}

console.log(results());
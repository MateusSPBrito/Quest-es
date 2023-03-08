const data = [
    { estado: 'SP', valor: 67836.43 },
    { estado: 'RJ', valor: 36678.66 },
    { estado: 'MG', valor: 29229.88 },
    { estado: 'ES', valor: 27165.48 },
    { estado: 'Outros', valor: 19849.53 },
]

const percent = (value, total) => {
    const valor = 100 * value / total
    return valor
}

const total = () => {
    let valor = 0
    data.forEach((item) => { valor = valor + item.valor })
    return valor
}

const result = () => {
    const valorTotal = total()
    let results = ''

    data.forEach((item) => {
        porcentagem = percent(item.valor, valorTotal)
        results = results + `${item.estado}: ${porcentagem.toFixed(2)}%\n`
    })
    return results
}

console.log(result());
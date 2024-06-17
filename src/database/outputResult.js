function outputResult(variables, freeVariables, arrayRowsOtherLines, valuesFunction) {
    const valuesNewFunction = []
    valuesFunction.forEach((value, i) => {
        if (i < variables) {
            valuesNewFunction.push(value)
        }
    })
    console.log(freeVariables)
    let number = []
    let index = []
    freeVariables.forEach((value, i) => {
        console.log(value)
        if (value > 0) {
            number.push(value)
            index.push(i)
        }
    })
    let numberColumn = []
    arrayRowsOtherLines.forEach((row, i) => {
        row.forEach((value, j) => {
            if (number && index) {
                numberColumn.push(value)
            }
        })
    })
    const table = document.createElement('table')
    const tr = document.createElement('tr')
    for (let i = 0, k = 1; i < variables + 1; ++i) {
        const td = document.createElement('td')
        if (i === variables + 1) {
            td.innerText = `x${k} = ${_}`
        } else {
            td.innerText = `Fmax = ${result}`
        }
        tr.appendChild(td)
    }
    table.appendChild(tr)
    const resultContainer = document.getElementById('result-container')
    resultContainer.appendChild(table)
}


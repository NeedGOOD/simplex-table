document.getElementById('result').addEventListener('click', function () {
    const variablesSelect = document.getElementById('variables').value
    const restrictionsSelect = document.getElementById('restrictions').value

    functionDataSearch()
    equationDataSearch(restrictionsSelect, variablesSelect)
})

function functionDataSearch() {
    const inputsFunction = document.querySelectorAll('.dynamicInputFunction')
    let valuesFunction = []

    inputsFunction.forEach(input => {
        valuesFunction.push(input.value)
    })

    const MinMax = document.getElementById('min-or-max').value
}

function equationDataSearch(index, jndex) {
    const inputsEquation = document.querySelectorAll('.dynamicInputEquation')
    let idsEquation = []
    let valuesEquation = []
    inputsEquation.forEach(input => {
        idsEquation.push(input.id)
        valuesEquation.push(input.value)
    })

    let arrayMatrix = []

    for (let i = 0; i < index; ++i) {
        arrayMatrix[i] = []
        for (let j = 0; j < jndex; ++j) {
            const id = `x${i + 1}${j + 1}`
            const index = idsEquation.indexOf(id)
            arrayMatrix[i][j] = (index !== -1) ? valuesEquation[index] : ''
        }
    }

    let valuesSigns = []
    let valuesEqual = []
    for (let i = 0; i < index; ++i) {
        valuesSigns.push(document.getElementById(`signs${i}`).value)
        valuesEqual.push(document.getElementById(`equal${i}`).value)
    }
}
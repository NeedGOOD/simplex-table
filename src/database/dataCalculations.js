function dataCalculations(variables, valuesFunction, arrayMatrix, valuesEqual, valuesSigns) {
    const sizeSigns = valuesSigns.length
    const freeVariables = new Array(sizeSigns).fill(0);
    valuesSigns.forEach(element => {
        valuesFunction.push(0)
    })

    const freeVariablesMassiv = Array.from({ length: sizeSigns }, (_, i) =>
        Array.from({ length: sizeSigns }, (_, j) => { return i === j ? 1 : 0 })
    )
    const combinedArray = arrayMatrix.map((row, index) => row.concat(freeVariablesMassiv[index]))
    plateConnection(valuesEqual, combinedArray)
    return { freeVariables, combinedArray }
}
document.getElementById('result').addEventListener('click', function () {
    const variables = parseInt(document.getElementById('variables').value)
    const restrictions = parseInt(document.getElementById('restrictions').value)

    let { valuesFunction, MinMax } = functionDataSearch()
    let { arrayMatrix, valuesEqual, valuesSigns } = equationDataSearch(restrictions, variables)

    let { freeVariables, combinedArray } = dataCalculations(variables, valuesFunction, arrayMatrix, valuesEqual, valuesSigns)
    const resultDelta = deltaSearch((variables + valuesSigns.length + 1), combinedArray, freeVariables, valuesFunction)
    let details = columnSearch(MinMax, resultDelta)
    let isCalculated = checkingPositive(details)

    let minIndex = searchingMinValue(details, restrictions, variables, valuesSigns, combinedArray)
    let guideLine = directedLine(minIndex, combinedArray)
    let minColumn = minElementsColumn(details, restrictions, variables, valuesSigns, combinedArray)

    outputTableInfo(variables, valuesSigns, freeVariables, valuesFunction, valuesEqual, combinedArray, resultDelta, details, minIndex, isCalculated)
    swaping(freeVariables, valuesFunction, details, minIndex)
    let arrayRowDifference = directedLineDivision(combinedArray, minColumn, minIndex, guideLine)
    let arrayRowsOtherLines = mathematicalOperationsOfOtherLines(combinedArray, minIndex, minColumn, guideLine, arrayRowDifference)
    while (isCalculated) {
        const resultOther = deltaSearch((variables + valuesSigns.length + 1), arrayRowsOtherLines, freeVariables, valuesFunction)
        details = columnSearch(MinMax, resultOther)
        isCalculated = checkingPositive(details)

        minColumn = minElementsColumn(details, restrictions, variables, valuesSigns, arrayRowsOtherLines)
        minIndex = searchingMinValue(details, restrictions, variables, valuesSigns, arrayRowsOtherLines)
        guideLine = directedLine(minIndex, arrayRowsOtherLines)

        outputTableInfo(variables, valuesSigns, freeVariables, valuesFunction, valuesEqual, arrayRowsOtherLines, resultOther, details, minIndex, isCalculated)
        swaping(freeVariables, valuesFunction, details, minIndex)
        arrayRowDifference = directedLineDivision(arrayRowsOtherLines, minColumn, minIndex, guideLine)
        arrayRowsOtherLines = mathematicalOperationsOfOtherLines(arrayRowsOtherLines, minIndex, minColumn, guideLine, arrayRowDifference)
    }
    // outputResult(variables, freeVariables, arrayRowsOtherLines, valuesFunction)
})

function functionDataSearch() {
    const inputsFunction = document.querySelectorAll('.dynamicInputFunction')
    const valuesFunction = Array.from(inputsFunction, input => parseInt(input.value))
    const MinMax = document.getElementById('min-or-max').value

    return { valuesFunction, MinMax }
}

function equationDataSearch(index, jndex) {
    const inputsEquation = document.querySelectorAll('.dynamicInputEquation')
    const idsEquation = Array.from(inputsEquation, input => input.id)
    const valuesEquation = Array.from(inputsEquation, input => parseInt(input.value))

    const arrayMatrix = Array.from({ length: index }, (_, i) =>
        Array.from({ length: jndex }, (_, j) => {
            const id = `x${i + 1}${j + 1}`;
            const valueIndex = idsEquation.indexOf(id);
            return valueIndex !== -1 ? valuesEquation[valueIndex] : '';
        })
    )

    const valuesSigns = Array.from({ length: index }, (_, i) =>
        document.getElementById(`signs${i}`).value
    )
    const valuesEqual = Array.from({ length: index }, (_, i) =>
        document.getElementById(`equal${i}`).value
    )
    valuesEqual.map(str => parseInt(str))
    return { arrayMatrix, valuesEqual, valuesSigns }
}
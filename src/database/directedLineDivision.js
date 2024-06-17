function directedLineDivision(combinedArray, minColumn, minIndex, guideLine) {
    let arrayRowDifference = []
    guideLine.map((value, i) => {
        const number = value / minColumn[minIndex]
        arrayRowDifference.push(parseFloat(number.toFixed(2)))
    })

    return arrayRowDifference
}
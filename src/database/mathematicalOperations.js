function mathematicalOperationsOfOtherLines(combinedArray, minIndex, directionalColumn, guideLine, arrayRowDifference) {
    let arrayRowsOtherLines = []
    combinedArray.map((rows, i) => {
        arrayRowsOtherLines[i] = []
        rows.map((value, j) => {
            if (minIndex !== i) {
                const result = value - (guideLine[j] * directionalColumn[i] / directionalColumn[minIndex])
                arrayRowsOtherLines[i][j] = parseFloat(result.toFixed(2))
            } else {
                arrayRowsOtherLines[i][j] = arrayRowDifference[j]
            }
        })
    })
    return arrayRowsOtherLines
}
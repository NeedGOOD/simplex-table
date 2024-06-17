function minElementsColumn(minDelta, restrictions, variables, valuesSigns, combinedArray) {
    let minColumn = []
    for (let i = 0; i < restrictions; ++i) {
        let numerator = combinedArray[i][0]
        for (let j = 0; j < variables + 1 + valuesSigns.length; ++j) {
            let denominator = combinedArray[i][j]
            if (j === minDelta.index && (denominator > 0 || numerator === 0)) {
                minColumn.push(denominator)
            } else if (j === minDelta.index && denominator <= 0) {
                minColumn.push(denominator)
            }
        }
    }
    return minColumn
}
function searchingMinValue(minDelta, restrictions, variables, valuesSigns, combinedArray) {
    let minElements = []
    for (let i = 0; i < restrictions; ++i) {
        let numerator = combinedArray[i][0]
        for (let j = 0; j < variables + 1 + valuesSigns.length; ++j) {
            let denominator = combinedArray[i][j]
            if (j === minDelta.index && (denominator > 0 || numerator === 0)) {
                let min = numerator / denominator
                minElements.push(min)
            } else if (j === minDelta.index && denominator <= 0) {
                minElements.push(null)
            }
        }
    }
    let numbers = minElements.filter(item => typeof item === 'number')

    let minNumber = Math.min(...numbers)
    let minIndex = minElements.indexOf(minNumber)
    return minIndex
}
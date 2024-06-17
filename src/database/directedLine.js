function directedLine(minIndex, combinedArray) {
    let guideLine = null
    combinedArray.map((_, i) => {
        if (minIndex === i) {
            guideLine = combinedArray[i]
        }
    })
    return guideLine
}
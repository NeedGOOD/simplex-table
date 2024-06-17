function plateConnection(valuesEqual, combinedArray) {
    const intArray = valuesEqual.map(str => parseInt(str))
    combinedArray.map((subArray, index) => {
        subArray.unshift(intArray[index])
        return subArray
    })
}
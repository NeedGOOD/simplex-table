function swaping(freeVariables, valuesFunction, details, minIndex) {
    valuesFunction.unshift(null)

    let number = null
    valuesFunction.map((value, i) => {
        if (i === details.index) {
            number = value
        }
    })
    valuesFunction.shift()
    freeVariables[minIndex] = number
}
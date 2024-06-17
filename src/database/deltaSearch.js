function deltaSearch(variables, arrayMatrix, freeVariables, valuesFunction) {
    const values = arrayMatrix.map((row, i) =>
        row.map(value => value * freeVariables[i])
    )

    const sums = Array.from({ length: variables }, (_, j) =>
        values.reduce((acc, row) => acc + row[j], 0)
    )

    const roundedNumbers = sums.map((sum, i) => i !== 0 ? sum - valuesFunction[i - 1] : sum)

    const resultOther = roundedNumbers.map(number => parseFloat(number.toFixed(2)));

    return resultOther
}
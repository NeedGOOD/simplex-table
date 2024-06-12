document.getElementById('result').addEventListener('click', function () {
    const variables = parseInt(document.getElementById('variables').value)
    const restrictions = parseInt(document.getElementById('restrictions').value)

    const { valuesFunction, MinMax } = functionDataSearch()
    const { arrayMatrix, valuesEqual, valuesSigns } = equationDataSearch(restrictions, variables)
    outputTableInfo(valuesFunction, arrayMatrix, valuesEqual, valuesSigns)
})

function functionDataSearch() {
    const inputsFunction = document.querySelectorAll('.dynamicInputFunction')
    const valuesFunction = Array.from(inputsFunction, input => parseInt(input.value));
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
    );

    const valuesSigns = Array.from({ length: index }, (_, i) =>
        document.getElementById(`signs${i}`).value
    );
    const valuesEqual = Array.from({ length: index }, (_, i) =>
        document.getElementById(`equal${i}`).value
    );
    return { arrayMatrix, valuesEqual, valuesSigns }
}
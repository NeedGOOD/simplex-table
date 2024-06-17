function outputTableInfo(variables, valuesSigns, freeVariables, valuesFunction, valuesEqual, combinedArray, resultDelta, minDelta, minIndex, result) {
    const restrictions = parseInt(document.getElementById('restrictions').value)

    const sizeSigns = valuesSigns.length

    const massivVariables = variables + 3 + sizeSigns
    const massivRestrictions = restrictions + 3

    const table = document.createElement('table')
    table.className = 'answer'

    for (let i = 0; i < massivRestrictions; ++i) {
        const tr = document.createElement('tr')
        tr.className = 'answer'
        for (let j = 0; j < massivVariables; ++j) {
            if (i === 0 && j === 1) {
                appendCell(tr, 'C')
            } else if (i === 0 && j === 2) {
                appendCell(tr, '-')
            } else if (i === 0 && j > 2) {
                appendCell(tr, valuesFunction[j - 3])
            } else if (i === 1 && j === 1) {
                appendCell(tr, 'B')
            } else if (i === 1 && j > 1) {
                appendCell(tr, `A${j - 2}`)
            } else if (i !== massivRestrictions - 1 && j === 1) {
                appendCell(tr, `x${i + 1}`)
            } else if (i === massivRestrictions - 1 && j === 1) {
                appendCell(tr, '&#8710;')
            } else if (i === massivRestrictions - 1 && j > 1) {
                if (minDelta.value === resultDelta[j - 2]) {
                    appendCell(tr, resultDelta[j - 2], 'answer', minDelta.value)
                } else {
                    appendCell(tr, resultDelta[j - 2], 'answer')
                }
            } else if (j === 0 && (i === 0 || i === 1 || i === massivRestrictions - 1)) {
                appendCell(tr, '', 'void')
            } else if (j === 0 && (i > 1 || i < massivRestrictions - 1)) {
                appendCell(tr, freeVariables[i - 2], 'void')
            } else {
                if (minIndex + 2 === i && minDelta.index + 2 === j) {
                    appendCell(tr, combinedArray[i - 2][j - 2], 'answer value', NaN, result)
                } else {
                    appendCell(tr, combinedArray[i - 2][j - 2], 'answer value')
                }
            }
        }
        table.appendChild(tr)
    }
    const container = document.getElementById('output-container')
    container.appendChild(table)
}

function appendCell(parent, text, className = 'answer', min = NaN, result = NaN) {
    const td = document.createElement('td')
    td.className = className

    if (min < 0) {
        td.style.backgroundColor = '#20B2AA'
    } else if (result) {
        td.style.backgroundColor = '#32CD32'
    }
    td.innerHTML = text
    parent.appendChild(td)
}
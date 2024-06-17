function createStartTable(container, rows = 2, cols = 2) {
    container.innerHTML = ''

    cols = cols * 2 + 1

    const table = document.createElement('table')
    table.className = 'table-restrictions'

    for (let i = 0; i < rows; ++i) {
        const tr = document.createElement('tr')
        for (let j = 1, k = 0; j <= cols; ++j) {
            const td = document.createElement('td')
            const div = document.createElement('div')
            div.className = 'info-box'

            if (j === cols) {
                td.className = 'last-box'
                appendLastInputBox(div, i)
            } else if (j === cols - 1) {
                td.className = 'signs-box'
                appendSelectSigns(div, i)
            } else if (j % 2 !== 0) {
                ++k
                td.className = 'odd-box'
                appendInputAndPre(div, k, 'Equation', i + 1)
            } else if (j % 2 === 0) {
                td.className = 'pair-box'
                appendPlusSign(div)
            }
            td.appendChild(div)
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
    container.appendChild(table)
}

function appendLastInputBox(parent, index) {
    const input = document.createElement('input')
    input.type = 'text'
    input.id = `equal${index}`
    parent.appendChild(input)
}

function appendInputAndPre(parent, index, that, j) {
    const inputText = document.createElement('input')
    inputText.type = 'text'
    inputText.className = (that === 'Function' || that === 'Equation')
        ? `dynamicInput${that}` : ''
    inputText.id = j ? `x${j}${index}` : `x${index}`;
    const pre = document.createElement('pre')
    pre.innerText = 'x'
    const sub = document.createElement('sub')
    sub.innerText = index
    pre.appendChild(sub)
    parent.appendChild(inputText)
    parent.appendChild(pre)
}

function appendPlusSign(parent) {
    const span = document.createElement('span')
    span.innerText = '+'
    parent.appendChild(span)
}

function appendSelectSigns(parent, index) {
    const select = document.createElement('select')
    select.id = `signs${index}`
    const signs = ['≤', '=', '≥'].forEach(element => {
        const option = document.createElement('option')
        option.value = element
        option.textContent = element
        select.appendChild(option)
    })
    parent.appendChild(select)
}
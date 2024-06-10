function createStartTable(container, rows = 2, cols = 2) {
    container.innerHTML = ''

    cols *= 2

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
                appendEqualsSign(div)
            } else if (j % 2 !== 0) {
                ++k
                td.className = 'odd-box'
                appendInputAndPre(div, k)
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

function appendEqualsSign(parent) {
    const span = document.createElement('span')
    span.innerText = '='
    parent.appendChild(span)
}

function appendInputAndPre(parent, index) {
    const inputText = document.createElement('input')
    inputText.type = 'text'
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
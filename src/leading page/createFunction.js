function createFuntion(container, cols = 2) {
    container.innerHTML = ''

    cols = cols * 2 + 1

    const table = document.createElement('table')
    table.className = 'table-restrictions'

    const tr = document.createElement('tr')
    for (let i = 1, k = 0; i <= cols; ++i) {
        const td = document.createElement('td')
        const div = document.createElement('div')
        div.className = 'info-box'

        if (i === cols) {
            td.className = 'selects'
            appendSelectMaxOrMin(div)
        } else if (i === cols - 1) {
            td.className = 'last-box'
            appendArrowSign(div)
        } else if (i % 2 !== 0) {
            ++k
            handleOddColumn(td, div, k)
        } else if (i % 2 === 0) {
            td.className = 'pair-box'
            appendPlusSign(div)
        }
        td.appendChild(div)
        tr.appendChild(td)
    }
    table.appendChild(tr)
    container.appendChild(table)
}

function handleOddColumn(td, div, index) {
    if (index === 1) {
        div.className = 'first-info-box'
        td.className = 'first-odd-box'
        appendSymbolF(div, index)
    } else {
        td.className = 'odd-box'
        appendInputAndPre(div, index, 'Function')
    }
}

function appendSymbolF(parent, index) {
    const span = document.createElement('span')
    span.className = 'function-start'
    span.innerText = 'F(x) = '
    parent.appendChild(span)

    const inputText = document.createElement('input')
    inputText.type = 'text'
    inputText.className = 'dynamicInputFunction'
    inputText.id = `x${index}`
    parent.appendChild(inputText)

    const pre = document.createElement('pre')
    pre.innerText = 'x'
    const sub = document.createElement('sub')
    sub.innerText = index
    pre.appendChild(sub)
    parent.appendChild(pre)
}

function appendArrowSign(parent) {
    const span = document.createElement('span')
    span.innerHTML = '&#10141;'
    parent.appendChild(span)
}

function appendSelectMaxOrMin(parent) {
    const select = document.createElement('select')
    select.id = 'min-or-max'
    const MinMax = ['max', 'min'].forEach(element => {
        const option = document.createElement('option')
        option.value = element
        option.id = element
        option.textContent = element
        select.appendChild(option)
    })
    parent.appendChild(select)
}
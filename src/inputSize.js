document.addEventListener('DOMContentLoaded', function () {
    const variablesSelect = document.getElementById('variables')
    const restrictionsSelect = document.getElementById('restrictions')
    const tableContainer = document.getElementById('table-container')
    const functionContainer = document.getElementById('function-container')

    function variablesOrRestrictions() {
        const variables = parseInt(variablesSelect.value)
        const restrictions = parseInt(restrictionsSelect.value)
        createFuntion(functionContainer, variables)
        createStartTable(tableContainer, restrictions, variables)
    }

    variablesSelect.addEventListener('change', variablesOrRestrictions)
    restrictionsSelect.addEventListener('change', variablesOrRestrictions)
    variablesOrRestrictions()
})
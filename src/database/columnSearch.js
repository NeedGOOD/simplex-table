function columnSearch(MinMax, resultDelta) {
    let minDetails = { value: resultDelta[0], index: 0 }
    if (MinMax === 'max') {
        resultDelta.reduce((min, current, index) => {
            if (current < min.value) {
                min.value = current;
                min.index = index;
            }
            return min;
        }, minDetails)
    }

    return minDetails
}
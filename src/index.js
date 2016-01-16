export default
function quicksort(array, predicate) {
    _quicksort(array, 0, array.length-1, predicate ? predicate : defaultPredicate)
}

function _quicksort(array, lo, hi, predicate) {
    if (lo < hi) {
        let pivotIndex = partition(array, lo, hi, predicate)
        _quicksort(array, lo, pivotIndex, predicate)
        _quicksort(array, pivotIndex + 1, hi, predicate)
    }
}

function partition(array, lo, hi, predicate) {
    let pivot = array[lo]
    let i = lo - 1
    let j = hi + 1

    while (true) {

        do { i += 1 }
        while (predicate(array[i], pivot) < 0 /*array[i] < pivot*/)

        do { j -= 1 }
        while (predicate(array[j], pivot) > 0 /*array[j] > pivot*/)

        if (i < j)
            swap(array, i, j)
        else
            return j
    }
}

function swap(array, i, j) {
    let tmp = array[i]
    array[i] = array[j]
    array[j] = tmp
}

function defaultPredicate(a, b) {
    return a < b ? -1 : a > b ? 1 : 0
}

function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        let start = arr[i];
        let j = i -1;
        while(j >= 0 && arr[j] > start) {
            arr[j +1] = arr[j];
            j--;
        }
        arr[j +1] = start;
    }
    return arr;
}

module.exports = insertionSort;
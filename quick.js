/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start = 0, end = arr.length -1){
    let pivotVal = arr[start];
    let pivotIdx = start;

    while(start < end) {
        while(arr[end] >= pivotVal && start < end) {
            end--;
        };
        while(arr[start] <= pivotVal && start < end) {
            start++;
        };
        if(start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
        }
    }
    [arr[pivotIdx], arr[start]] = [arr[start], arr[pivotIdx]];

    return start;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, left=0, right=arr.length -1) {
    if(left < right) {
        const pivotIdx = pivot(arr, left, right);
        quickSort(arr, left, pivotIdx -1);
        quickSort(arr, pivotIdx +1, right);
    };
    return arr;
}

module.exports = { pivot, quickSort };
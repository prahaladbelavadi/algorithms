let arr = [4,6,5,4,9,8,3,2,9,8,7]

function selectionSort(arr){
    for (i = 0; i < arr.length; i++) {
        let j = i;
        for (k = i + 1; k < arr.length; k++) {
            if (arr[k] < arr[j]) {
                j = k;
            }
            t = arr[i]; arr[i] = arr[j]; arr[j] = t;
        }
    }
    console.log( arr)
}

selectionSort(arr)
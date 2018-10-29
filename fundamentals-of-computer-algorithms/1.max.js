// # 1
// Problem: Find the maximum value in an array
// Page: 8

arr = [1,2,3,4,5,6,7,8,8,9]
arr = arr.reverse()
function max(arr){
    let result = 0
    for (var i = 0; i < (arr.length); i++) {
        if (i > result) {
            result = i
        }
    }
    console.log( result)
}

max(arr)
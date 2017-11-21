# Linear Search [PG:13]

### Procedure: Linear Search (A,n, x)
### Inputs:
- A: An array
- n: The number of elements in A to seach through
- x: The value being searched for

### Output:
  Either an index i for which A[i] = x, or the special value
  NOT-FOUND, which could be any invalid index into the array, such as
  0 or any negative integer.

### Steps:
1. Set answer to NOT-FOUND.
2. For each index i, going from 1 to n, in order:
A. If AŒi D x, then set answer to the value of i.
3. Return the value of answer as the output.

### Examples:
- Javascript
```
var arr = [a,b,c,,d,e,g,h,i,j,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z];
var num = arr.length;
var val = x;
let status = false;


function linearSearch(arr, num, val){
for (var i; i < arr.length; i++ ){
    if (arr(i) == val){
      status = True;
      console.log(val +' is at '+ arr[i] + 'th position in Array:'+ arr);
      break;
    }
  }
}
```

# linear search



```
var doLinearSearch = function(array) {
  for (var guess = 0; guess < array.length; guess++) {
    if (array[guess] === targetValue) { 
        return guess;  // found it!
    }
  }
  return -1;  // didn't find it
};
```

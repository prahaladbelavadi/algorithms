# Binary Search

Binary search is an efficient algorithm for finding an item from an ordered list of items. It works by repeatedly dividing in half the portion of the list that could contain the item, until you've narrowed down the possible locations to just one. We used binary search in the guessing game in the introductory tutorial.

One of the most common ways to use binary search is to find an item in an array. For example, the Tycho-2 star catalog contains information about the brightest 2,539,913 stars in our galaxy. Suppose that you want to search the catalog for a particular star, based on the star's name. If the program examined every star in the star catalog in order starting with the first, an algorithm called linear search, the computer might have to examine all 2,539,913 stars to find the star you were looking for, in the worst case. If the catalog were sorted alphabetically by star names, binary search would not have to examine more than 22 stars, even in the worst case.

The next few articles discuss how to describe the algorithm carefully, how to implement the algorithm in JavaScript, and how to analyze efficiency.

## Pseudocode for binary search

When describing an algorithm to a fellow human being, an incomplete description is often good enough. Some details may be left out of a recipe for a cake; the recipe assumes that you know how to open the refrigerator to get the eggs out and that you know how to crack the eggs. People might intuitively know how to fill in the missing details, but computer programs do not. That's why we need to describe computer algorithms completely.


### Here's a pseudocode description of binary search:

```
- Let min = 1 min=1m, i, n, equals, 1 and max = nmax=nm, a, x, equals, n.
- Guess the average of maxmaxm, a, x and minminm, i, n, rounded down so that it is an integer.
- If you guessed the number, stop. You found it!
- If the guess was too low, set minminm, i, n to be one larger than the guess.
- If the guess was too high, set maxmaxm, a, x to be one smaller than the guess.
- Go back to step two.

We could make this pseudocode even more precise by clearly describing the inputs and the outputs for the algorithm and by clarifying what we mean by instructions like "guess a number" and "stop." But this will do for now.
```

```bash
//js 

let min = 1;
let max = n;
let guess = k;
const num = x;

//Find average
function findAvg(min, max){
  return (min+max)/2
};

//

if (findAvg(min,max)==num){
 return num
}else{
if (guess < num){
min = guess;
  findAvg(min, max)
  }else {
  max = guess;
  findAvg(min,max)
  }
}
```


> [Khan Academy](https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search)

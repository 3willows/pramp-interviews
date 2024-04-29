This is a two-fold question.  

The eventual aim is to deliver a sort function that sorts an array of numbers from lowest to highest.  But first you need to create a "flip" function. 

(1) Create a flip function that takes two arguments:
- an array;
- an index k (that is intended to be less than the length of the array)

- the function needs to flip the first k elements of the array.

Example:

```js
let arr = [3, 2, 5]
flip(arr, 2)
// array should be mutated to [2, 3, 5]
```

(2) Create a pancakeSort function that uses the flip function and sorts an array from lowest to highest

NB: you also need an ancilliary function! It needs to give you the index of the largest element in the first k elements of the array. E.g.
```js

let arr = [2, 5, 3, 10]
largestElement(arr, 3)
// return value should be the 2nd element, 5.
```

Key idea to the solutions:-

(1) You need a temporary variable to store the value to be flipped.  Also think about situations when the length of array is odd and length of array is even!

(2) You need 4 steps

- Find the largest element.  
- Flip largest elememnt to the front of the array. 
- Flip largest element to end of the front of the array. 
- Repeat, but limit your sights from the first to the second-last element of the array! 
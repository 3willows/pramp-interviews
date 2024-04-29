This is a comparatively easy challenge.

Given a string of opening and closing brackets, e.g. "()(", create a function that returns the number of additional symbols required to close all brackets.  

E.g. for "()(", the return value should be 1 as only 1 additional symbol (i.e. the closing bracket ")" is required).

My initial efforts are below,

```js
function bracketMatch(text) {
  let count = 0
  for (let i = 0; i < text.length; i++) {
    if (Array.from(text)[i] === "(") {
      count++
    }
    if (Array.from(text)[i] === ")") {
      count--
    }
  }
  console.log(count)
  return count
}
```

But what about ")("?  The answer should be 2 (one opening bracket in front, one closing bracket after), not 0!
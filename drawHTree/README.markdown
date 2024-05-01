The ultimate aim is to create a function that draws [H-trees](https://en.wikipedia.org/wiki/H_tree).

However, no graphics are involved.  Instead, you are asked to write the following function as a placeholder to the actual drawing function.


```js
function drawLine(x1, y1, x2, y2) {
  // placeholder for actual function to be used in production
  console.log(`draws a line from (${x1}, ${y1}) to (${x2}, ${y2})`)
}

```


```js
function drawHTree(x, y, length, depth) {
  if ((depth = 0)) return
  if ((depth = 1)) {
    //horizontal
    drawLine(x - length / 2, y, x + length / 2, y)
    //vertical left
    drawLine(x - length / 2, y + length / 2, x - length / 2, y - length / 2)
    //vertical right
    drawLine(x + length / 2, y + length / 2, x + length / 2, y - length / 2)
  }
  if (depth > 1) {
    depth--
    length = length / Math.sqrt(2)
    // how to actually solve this?
  }
}

```
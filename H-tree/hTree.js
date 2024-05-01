const canvas = document.getElementById("c")
const context = c.getContext("2d")
context.strokeStyle = "#00386B"


// line helper

const drawLine = (x0, y0, x1, y1) => {
  console.log(`draws a line from (${x0}, ${y0}) to (${x1}, ${y1})`)
  context.beginPath()
  context.moveTo(x0, y0)
  context.lineTo(x1, y1)
  context.stroke()
}

function drawHTree(x, y, length, depth) {
  if (depth === 0) return
  if (depth >= 1) {
    let x0 = x - length / 2
    let x1 = x + length / 2
    let y0 = y + length / 2
    let y1 = y - length / 2

    //horizontal
    drawLine(x0, y, x1, y)
    //vertical left
    drawLine(x0, y1, x0, y0)
    //vertical right
    drawLine(x1, y0, x1, y1)

    //If depth > 1, recurse.  If depth = 1, depth-- takes it to zero and it stops.
    depth--
    length = length / Math.sqrt(2)
    drawHTree(x0, y1, length, depth)
    drawHTree(x0, y0, length, depth)
    drawHTree(x1, y0, length, depth)
    drawHTree(x1, y1, length, depth)
    drawHTree(x1, y1, length, depth)
  }
}

// paint helper
const paint = () => {
  drawHTree(canvas.width / 2.0, canvas.height / 2.0, 100, 2)
}

// fire away
paint()

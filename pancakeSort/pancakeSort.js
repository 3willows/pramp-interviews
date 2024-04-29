function flip(arr, k) {
  for (let i = 0; i < Math.floor((k + 1) / 2); i++) {
    tmp = arr[i]
    arr[i] = arr[k - i]
    arr[k - i] = tmp
  }
}

function findMaxIndexInPrefix(arr, k) {
  let index = 0
  for (let i = 0; i <= k; i++) {
    if (arr[i] > arr[index]) {
      index = i
    }
  }
  return index
}

function pancakeSort(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    // console.log(`i is ${i}`)
    let maxIndex = findMaxIndexInPrefix(arr, i)
    console.log(`greatest element left index ${maxIndex}, value ${arr[maxIndex]}`)
    flip(arr, maxIndex)
    console.log(`flip largest element to front ${arr}`)
    flip(arr, i)
    console.log(`flip largest element to end ${arr}`)
    console.log("reducing flipping length by 1")
  }
  return arr
}

arr = [30, 1, 2, 5, 6, 6, 7]

console.log(pancakeSort(arr))

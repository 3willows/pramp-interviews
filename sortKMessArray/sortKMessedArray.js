function sortKMessedArray(arr, k) {
  // if (k === 1){
    // arr.sort()
  // }
   let answer = []
   let startIndex = 0
   while (startIndex < arr.length)
  { let range = arr.slice(startIndex, startIndex+ k+1)
   range.sort()
    console.log(range)
 
   startIndex += k + 1 
  }
   console.log(answer)
   return answer
 }
 
 // O(n log (n))
 // O(n * klog(k))
 
// jump over i, not k

function sortKMessedArray(arr, k) {
  // if (k === 1){
    // arr.sort()
  // }
     const n = arr.length;
     
     for (let i = 0; i < n; i++) {
         const start = Math.max(0, i - k);
         const end = Math.min(n - 1, i + k);
         
         // Sort the subarray arr[start...end]
         arr = arr.slice(0, start).concat(arr.slice(start, end + 1).sort((a, b) => a - b), arr.slice(end + 1));
     }
     console.log(arr)
     return arr;
 }


//  Y           *
//  *           *
//  Z***(0,0)***Z //length
//  *           *
//  Y           *
 
 sortKMessedArray([1, 4, 5, 2, 3, 7, 8, 6, 10, 9], 2)
 
 // 2: need to check for everything up to index 3
 // 1: need to check for all 4
 // 3: need to check for all 4
 // 4: need to check for everything down to index 2
 
 // index = ?
 // maxIndex = index
 // for (let i= ?; i < index + 2; i++ ){
 // if arr[index] < arr
 //}
 
 // array.sort()
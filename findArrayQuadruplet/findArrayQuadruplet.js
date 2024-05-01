function findArrayQuadruplet(arr, s) {
  // your code goes here
  let quad 
  let sum
  
  for (let i = 0; i <= arr.length-4; i++){
    quad = arr.slice(i,i+4)
    sum = quad.reduce((acc, crr) => (acc + crr), 0)
    console.log(quad, sum)
    
    if (sum === s){
      console.log("solved with", quad)
      return quad
    }
}

}

findArrayQuadruplet([3,2,1,1,1,1], 4)
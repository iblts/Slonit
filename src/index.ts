import { myIncludes, myIndexOf, mySlice } from './tasks/array-methods'

// startGame()

const arr = [1, 2, 3, 4, 5, 1, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

console.log(mySlice(arr, 5, 100))
console.log(myIndexOf(arr, 1))
console.log(myIndexOf(arr, 1, 3))
console.log(myIncludes(arr, 1))
console.log(myIncludes(arr, 2, 3))

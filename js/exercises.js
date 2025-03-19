'use strict'

// 38. Implement a function named biggerThan100. It receives an array of numbers and returns a new array containing only the numbers which are greater than 100.


// var nums = [50, 100, 200, 300]
// var res = biggerThan100(nums)
// console.log('res: ', res)
// function biggerThan100(nums) {
//     // var NewNums = nums.filter(function (num) { return num > 100 })
//     var NewNums = nums.filter(num => num > 100)
//     return NewNums
// }





/* 44. Write the function printNumsCount(nums).
The parameter nums, is an array of integers in the range 0 - 3 like this one:
3 2 0 2 2 0 3
The function prints how many times each of these numbers appears in the array.
    Tip: the fact that the values are in a specific range allows us to use a second array, in
    which the index, is actually the number itself.
The values of this second array, will store the occurrences of the numbers in nums.
For example: INPUT: [3, 2, 0, 2, 2, 0, 3]
EXPECTED: [2, 0, 3, 2] */


// var nums = [3, 2, 0, 2, 2, 0, 3]
// var res = printNumsCount(nums)
// console.log('res: ', res)
// function printNumsCount(nums) {
//     var counters = [0, 0, 0, 0]
//     nums.forEach(num => counters[num]++)
//     return counters
// }





/* 46. Write the function: multBy(nums, multiplier) which modifies the nums array
so that each of its items, is multiplied by multiplier.
The function returns the modified array.
Step2: Add another parameter to this function named isImmutable.
When this parameter is true, use array.slice() to perform the function’s
calculation on a copy of the array, and leave the original array unchanged.
The function should return the modified array.  */



// var nums = [1, 2, 3, 4]

// 1.
// var res = multBy(nums, 10)
// console.log('res: ', res)
// console.log('nums: ', nums)
// function multBy(nums, multiplier) {
//     nums.forEach((num, i) => nums[i] = num * multiplier)
//     return nums
// }

// 2.
// var res = multBy(nums, 10)
// console.log('res: ', res)
// console.log('nums: ', nums)
// function multBy(nums, multiplier) {
//     var copyNums = nums.map(num => num * multiplier)
//     return copyNums
// }

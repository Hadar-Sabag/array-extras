'use strict'

var input = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]];
var expected = [[2, 4, 6],
[8, 10, 12],
[14, 16, 18]];
var actual = doubleMatrix(input)

console.log('INPUT:', input, 'EXPECTED:', expected, 'ACTUAL:', actual)

function doubleMatrix(mat) {
    return mat.map(row => row.map(num => num * 2))
}


'use strict'

var input = ['abc', 'xyz'];
var expected = ['cba', 'zyx']
var actual = reverseAll(input)

console.log('INPUT:', input, 'EXPECTED:', expected, 'ACTUAL:', actual)

function reverseAll(strs) {

    return strs.map(item => item.split('').reverse().join(''))
}
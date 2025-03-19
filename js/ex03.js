'use strict'

var input = ['abcdefg', 'xyz'];
var expected = ['Abcdefg', 'xyz']
var actual = capitalizeLongerThan5(input)

console.log('INPUT:', input, 'EXPECTED:', expected, 'ACTUAL:', actual)

function capitalizeLongerThan5(strs) {
    return strs.map(item => item.length > 5 ? item.charAt(0).toUpperCase() + item.slice(1) : item)
}
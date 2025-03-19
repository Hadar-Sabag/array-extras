'use strict'

var input = ['average', 'exceptional', 'amazing'];
var expected = ['aeae', 'eeioa', 'aai']
var actual = onlyVowels(input)

console.log('INPUT:', input, 'EXPECTED:', expected, 'ACTUAL:', actual)

function onlyVowels(strs) {
    var vowels = 'aeiouAEIOU'
    return strs.map(str => {
        return str.split('').filter(char => vowels.includes(char)).join('')
    })
}
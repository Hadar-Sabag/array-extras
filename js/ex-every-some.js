'use strict'

// 1.

var students = [
    { name: 'Buli', grades: 100 },
    { name: 'Kuli', grades: 90 },
    { name: 'Muli', grades: 80 },
    { name: 'Kuti', grades: 70 }
]

// var isAllPassed = allPassed(students)
// console.log('isAllPassed: ', isAllPassed)

function allPassed(students) {

    return students.every(student => student.grades >= 70)
}

// 2.

var players = [
    { name: 'Buli', isAlive: true },
    { name: 'Kuli', isAlive: false },
    { name: 'Muli', isAlive: false }
]

// var isOneAive = isGameOn(players)
// console.log('isOneAive: ', isOneAive)

function isGameOn(players) {

    return players.some(players => players.isAlive)
}

// 3.

var arr2d = [
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4]
]
var rowLength = arr2d[0].length

// var isMat = isMatrix(arr2d)
// console.log('isMat: ', isMat)

function isMatrix(arr2d) {

    return arr2d.every(row => row.length === rowLength)
}

// 4. Bonus:

var num2d = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4],
    [1, 2, 3, 4]
]

// var isMoreFive = isWide(num2d)
// console.log('isMoreFive: ', isMoreFive)

function isWide(arr2d) {

    return arr2d.some(row => row.length >= 5)
}


// 5. Bonus:

var input = [
    [1, 10, -100],
    [2, -20, 200],
    [3, 30, 300]
]

var expected = [[3, 30, 300]];
var actual = positiveRowsOnly(input)

// console.log('INPUT:', input, 'EXPECTED:', expected, 'ACTUAL:', actual)

function positiveRowsOnly(mat) {

    return mat.filter(row => row.every(num => num > 0))
}

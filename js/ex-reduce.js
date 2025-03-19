'use strict'

// 1. 

var emps = [
    {
        name: 'Joe Schmoe',
        yearsExperience: 5,
        department: 'IT'
    },
    {
        name: 'Sally Sallerson',
        yearsExperience: 15,
        department: 'Engineering'
    },
    {
        name: 'Bill Billson',
        yearsExperience: 5,
        department: 'Engineering'
    },
    {
        name: 'Jane Janet',
        yearsExperience: 15,
        department: 'Management'
    },
    {
        name: 'Bob Hope',
        yearsExperience: 9,
        department: 'IT'
    }
]

// var sumOfExperience = experienceSum(emps)
// console.log('sumOfExperience: ', sumOfExperience)

function experienceSum(arr) {

    return arr.reduce((acc, obj) => acc + obj.yearsExperience, 0)
}


// var res = departmentSum(emps)
// console.log('res: ', res)

function departmentSum(arr) {

    return arr.reduce((acc, emp) => {
        var currDep = emp.department
        if (!acc[currDep]) acc[currDep] = emp.yearsExperience
        else acc[currDep] += emp.yearsExperience
        return acc
    }, {})
}

// var res = keyBy(emps, 'yearsExperience')
// console.log('res: ', res)

function keyBy(emps, key) {

    return emps.reduce((acc, emp) => {
        if (!acc[emp[key]]) acc[emp[key]] = []

        acc[emp[key]].push(emp)
        return acc
    }, {})
}

// var res = departmentSumOfEmployees(emps)
// console.log('res: ', res)

function departmentSumOfEmployees(emps) {

    return emps.reduce((acc, emp) => {
        var currDep = emp.department
        acc[currDep] = acc[currDep] ? acc[currDep] + 1 : 1
        return acc
    }, {})
}

// 2.

// var nums = [1, 3, 3, 7, 2, 1, 3, 1, 2, 2]
// findModes(nums)
function findModes(values) {

    var map = values.reduce((acc, value) => {
        acc[value] = acc[value] ? acc[value] + 1 : 1
        return acc
    }, {})
    console.log('map: ', map)
    var max = 0
    for (var key in map) {
        if (map[key] > max) max = map[key]
    }
    console.log('max: ', max)

    var newNums = []
    for (var key in map) {
        if (map[key] === max) newNums.push(key)
    }
    console.log('newNums: ', newNums)
}


// 3.
// var arr = ['Hello', [9, 6], 18, [4, 7, 8]]
// var res = flatten(arr)

// console.log('res: ', res)

function flatten(values) {

    return values.flat()
}

// var input = [1, [2, [3, 4, [5]]], 6]
// var res = flattenRecursive(input)
// console.log('res: ', res)

// function flattenRecursive(values) {
//     return values.flat()
// }





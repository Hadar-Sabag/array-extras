'use strict'

var gMovies = [
    { imdb: 'tt0373889', name: 'Harry Potter', rate: 17 },
    { imdb: 'tt0000004', name: 'Un bon bock', rate: 20 },
    { imdb: 'tt0000003', name: 'Pauvre Pierrot', rate: 15 },
]
console.log('gMovies: ', gMovies)

// var res = getMovieLink('tt0000003')
// console.log('res: ', res)

function getMovieLink(imdb) {

    var movie = gMovies.find(movie => movie.imdb === imdb)

    return `<a href="https://www.imdb.com/title/${imdb}/">${movie.name}</a>`
}
// deleteMovie('tt0373889')
function deleteMovie(imdb) {

    var movie = gMovies.findIndex(movie => movie.imdb === imdb)
    console.log('movie: ', movie)

    gMovies.splice(movie, 1)
    console.log('gMovies: ', gMovies)
}

// var res = sortByName(gMovies)
// console.log('res: ', res)

function sortByName(movies) {

    return movies.sort((movie1, movie2) => movie1.name.localeCompare(movie2.name))
}

// var res = sortByRate(gMovies)
// console.log('res: ', res)

function sortByRate(movies) {

    return movies.sort((movie1, movie2) => movie1.rate - movie2.rate)
}
"use strict"
let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
let question1 = prompt('Один из последних просмотренных фильмов?', '');
let question2 = prompt('Насколько оцените его?', '');
let question3 = prompt('Один из последних просмотренных фильмов?', '');
let question4 = prompt('Насколько оцените его?', '');

personalMovieDB.movies[question1] = question2;
personalMovieDB.movies[question3] = question4;
console.log(personalMovieDB);
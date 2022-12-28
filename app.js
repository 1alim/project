 "use strict";
// let v = 56;
// let b = 66;
// console.log(v+b);

// let obj = {
//     name: "John",
//     age: 25,
//     isMarried: false
// };

// // console.log(obj.name);
// console.log(obj["name"]);

// alert('тревога');
// const result = confirm('are you debil');
// console.log(result);

// const answer =  +prompt('Вам есть 18?','18');
// console.log(answer);

// const answers = [];

// answers[0] = prompt('Как вас зовут?','');
// answers[1] = prompt('Как ваша фамилия?','');
// answers[2] = prompt('Сколько вам лет?','');

// console.log(answers);

// const category = 'toys';
// console.log(`https://someurl.com/${category}`);

// console.log(4 + +"5");

// let a = 10,
//     b = 10;

// a++;
// b--;

// console.log(a);
// console.log(b);

// 1.
const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
// console.log(numberOfFilms);
// 2.
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
// 3.
const a = prompt('Один из последних просмотренных фильмов'),
b = prompt('На сколько оцените его?');
personalMovieDB.movies[a] = b;

console.log(personalMovieDB);


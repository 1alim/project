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

// // 1.
// const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
// // console.log(numberOfFilms);
// // 2.
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
// // 3.
// const a = prompt('Один из последних просмотренных фильмов'),
// b = prompt('На сколько оцените его?');
// personalMovieDB.movies[a] = b;

// console.log(personalMovieDB);

// условия
// if (4==4){
//     console.log("Ok");
// } else {
//     console.log('error');
// }


// if (num<49){
//     console.log('error');
// } else if (num>100){
//     console.log('много');
// } else {
//     console.log('Ok!');
// }

// тернарный оператор

// (num===50) ? console.log('Ok!') : console.log('error');

// const num = 50;

// switch (num) {
//     case 49 : console.log('неверно');
//     break;
//     case 100 : console.log('неверно');
//     break;
//     case 50 : console.log('в точку');
//     break;
//     default :
//      console.log('не в этот раз  ');
//     break;

// // }

// let num = 50;

// while(num <= 55){
//   console.log(num);
//   num++;
// }

// for(let i=5; i<11; i++){
//     console.log(i);
// }
// for(let i=20; i>9; i--){
//     console.log(i);
//     if(i===13){
//         break;
//     }
// }
 
// for(let i=2; i<11; i++){
//     if ((i%2)==0){
//         console.log(i);
//     }
// }
// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }
// let i=2;
// while(i < 16) {
//      i++;
//        if(i%2 ===1){
//        console.log(i);
//     }
       
// }
//  let arr=[];
// for(let i=5;i<11;i++){
//     arr[i-5]=i;
// }
//  console.log(arr);

// 1.
// for(let i=5; i<11; i++){
//     console.log(i);
// }
// // 2.
// for(let i=20; i>9; i--){
//     console.log(i);
//     if(i===13){
//         break;
//     }
// }
// // 3.
// for(let i=2; i<11; i++){
//     if ((i%2)===0){
//         console.log(i);
//     }
// }
// // 4.
// let i=2;
// while(i < 16) {
//      i++;
//        if(i%2 ===1){
//        console.log(i);
//     }
       
// }
// // 5.
// let arr=[];
// for(let i=5;i<11;i++){
//     arr[i-5]=i;
// }
//  console.log(arr);

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];
// for (let i=0;i<arr.length;i++){
//     result[i]=arr[i];
// }
// console.log(result);

// const data = [5,10,'Shopping',20,'Homework'];

// for (let i=0;i<data.length;i++){
//     if (typeof(data[i])==='number'){
//         data[i]=data[i]*2;
//     } else if (typeof(data[i])==='string'){
//         data[i]=`${data[i]} -done`;
//     }
// }

// console.log(data);

// const data =[5,10,'Shopping',20,'Homework'];
// const result = [];
// for (let i=1; i<=data.length; i++){
//     result[i-1]=data[data.length-i];
// }
// console.log(result);
  let result = '';
  const lines = 5;
    for (let i=0;i<=lines;i++){
        for (let j=0;j<lines-i ;j++){
                result+=' ';}
                for (let j=0;j<2*i+1;j++){
            result+='*';
          }
        
            result += '\n';
    }
  console.log(result);



  
                                                

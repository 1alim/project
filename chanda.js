const cars = ['Мазда', 'Форд', 'БМВ', 'Мерседес']
const fib = [1,1,2,3,5,8,13,'21']

// console.log(cars)

// cars.push('Рено')
// console.log(cars)
// cars.unshift('Волга')
// console.log(cars)
// cars.shift()
// console.log(cars)
// console.log(cars.reverse())
// console.log(cars)

// const text = 'Привет, мы изучаем JavaScript'
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText)

//  const index = cars.indexOf('БМВ')
//  cars[index] = 'Porsche'
//  console.log(cars)

// const people = [
//     {name: 'Ali', budget:4200},
//     {name: 'Artur', budget:5300},
//     {name: 'halid', budget:3700},
// ]

// const person = people.find(person => person.budget === 5300)
// console.log(person)

// const index = people.findIndex(function(person){
//     return person.budget === 5300
// })
// console.log(index)
// console.log(people[index])

// const person = people.find(function(person){
//     return person.budget===5300
// })
// console.log(person)

// console.log(cars.includes('Мазда'))

// const upperCaseCars = cars.map(car => {
//     return car.toUpperCase()
// })
// console.log(upperCaseCars)

// const pow2fib = fib.map(num => num**2)
// console.log(pow2fib)

//Обьекты

const person = {
    name: 'Ali',
    age: 28,
    isProgrammer: true,
    languages: ['ru','geo','mgr','eng','ar'],
    greet(){
        console.log('greet from person')
    },
    info(){
        console.info('Информация про человека по имени:',person.name)
    }
}
// console.log(person);
// console.log(person.languages[2]);
// const name = person.name
// const age = person.age
// const languages = person.languages

// const {name,age,languages} = person

// console.log(name,age,languages);

// for (let key in person) {
//     console.log(key) //key
//     console.log(person[key]);
// }

// const keys = Object.keys(person)
// keys.forEach((key)=> {
//     console.log(key);
//     console.log(person[key]);
// })
// person.info()

// const people =['ali','artur','azamat']

// for (let i=0; i < people.length; i++) {
//     console.log(people[i])
// }

// const array = [1,2,3,4,5,6,7,8,9,10]

// for (let i=0; i<array.length; i++) {
//     if (array[i]>3 ){
//         console.log(array[i])
//     }
// }
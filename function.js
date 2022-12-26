// const name = 'Ali'
// const age = 28

// const output = 'Привет, меня зовут ' + name + ' и мой возраст: ' + age + ' лет'
// const output1 = `Привет, меня зовут ${name} и мой возраст ${age<30? 'A' : 'B'} лет`
// console.log(output)
// console.log(output1)

// const lastName='Tsotsonava'
// console.log(lastName.length)
// console.log(lastName.toLowerCase())
// console.log(lastName.toUpperCase())
// console.log(lastName.charAt(3))

// function logPerson(s, name, age){
//     console.log(s, name, age)
//     return 'Info about person'
// }
// const personName = 'Владилен'
// const personAge = 26

// const output = logPerson`Имя: ${personName}, Возраст: ${personAge}`
// console.log(output)

// Функции 
// Function Declaration
// function a (name) {
// console.log('Ассаляму Алейкум, ' +name)
// }
// // Function Expression
// const a2 = function greet2(name){
//     console.log('Ассаляму Алейкум уа рахматулла, '+name)
// }
// a('Ali')
// a2('Ali')

// Анонимные функции 
// let counter = 0
// const interval = setInterval(function(){
//     if (counter === 5) {
//         clearInterval(interval)
//     } else {
//     console.log(++counter)}

// }, 1000)

// function a (name) {
// console.log('Ассаляму Алейкум, ' +name)
// }
// const arrow = (name) => {
//     console.log('Ассаляму Алейкум, ' +name)
// }
// arrow('Ali')

// const pow2 = num =>  num ** 2
// console.log(pow2(5))

// // Параметры по умолчанию 
// const sum = (a,b) => a+b
// console.log(sum(4,5))
// const sum2 = (a=5,b=a*3) => a+b
// console.log(sum2())

// function sumAll(...all){
//     let result = 0
//     for (let num of all){
//         result += num
//     }
//     return result
// }
// const res = sumAll(1,2,3,4,5)
// console.log(res)

// Замыкания 
function createMember(name) {
    return function(lastName) {
        console.log(name + lastName)
    }
}
const logWithLastName = createMember('ali')
console.log(logWithLastName('Tsotsonava'))

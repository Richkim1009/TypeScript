function greet(who: string) {
  console.log('Hello', who);
}

greet('jn');

// let city = 'new york city';
// console.log(city.toUppercase())

// js는 실행되지만 ts는 실행되지 않음
// const states = [
//   {name: 'Alabama', capital: 'Montgomery'},
//   {name : 'Alaska', captial : 'Juneau'},
//   {name : 'Arizona', capital: 'Phoenix'},
// ]

// for (const state of states) {
//   console.log(state.capitol)
// }


// 이러한 상황에서는 ts가 오류가 어디인지 알수가 없다
// const states = [
//   {name: 'Alabama', capital: 'Montgomery'},
//   {name : 'Alaska', captiol : 'Juneau'},
//   {name : 'Arizona', capital: 'Phoenix'},
// ]

// for (const state of states) {
//   console.log(state.capital)
// }

interface State {
  name : string
  capital : string
}

const states: State[] = [
  {name: 'Alabama', capital: 'Montgomery'},
  {name : 'Alaska', capital : 'Juneau'},
  {name : 'Arizona', capital: 'Phoenix'}
]

for (const state of states) {
  console.log(state.capital)
}

// const x = 2 + '3'; // Ok, type is string
const y = '2' + 3; // ok, type is string

// const a = null + 7;
// const b = [] + 12;
// alert('Hello', 'Typescript'); 

const names = ['Alice', 'Bob']
console.log(names[2].toUpperCase())
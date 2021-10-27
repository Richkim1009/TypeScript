interface Person {name: string};
const alice: Person = {name: 'Alice'}; // 타입을 명시
const bob = {name: 'Bob'} as Person; // 타입을 단언, 타입스크립트가 추론한 타입이 있더라도 Person타입으로 간주합니다.

const alice: Person = {}; // 타입을 선언 하는것이 더 좋다. 
const bob = {} as Person; // 오류가 안남

const alice: Person = {
  name: 'Alice',
  occupation: 'TypeScript developer'
};

const bob = {
  name: 'Bob',
  occupation: 'Javascript developer'
} as Person;
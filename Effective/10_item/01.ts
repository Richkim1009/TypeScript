const originalCharAt = String.prototype.charAt;
String.prototype.charAt = function(pos) {
  console.log(this, typeof this, pos);
  return originalCharAt.call(this, pos);
};
console.log('primitive'.charAt(3));

// 어떤 속성을 기본형에 할당한다면 그 속성이 사라집니다.
// let xx = 'hello';
// xx.language = 'English';
// xx.language;

function getStringLen(foo: String) {
  return foo.length;
}

getStringLen('Hello');
getStringLen(new String('hello'));

function isGreeting(phrase: String) {
  return [
    'hello',
    'good day'
  ].includes(phrase);
}
// string은 String에 할당할 수 있지만 String은 string에 할당할 수 없습니다.

const s: String = 'primitive';
const n: Number = 12;
const bb: Boolean = true;
// 당연히 런타임 값은 기본형이다.
// 그러나 기본형 타입은 객체 래퍼에 할당할 수 있기 때문에 타입스크립트는 기본형 타입을 객체 래퍼에 할당하는 선언을 허용합니다.
// 그러나 기본형 타입을 객체 래퍼에 할당하는 구문은 오해하기 쉽고, 굳이 그렇게 할 필요도 없습니다.
// 그냥 기본형 타입을 사용하자

// new 없이 BigInt와 Symbol를 호출하는 경우는 기본형을 생성하기 때문에 사용해도 좋습니다.
typeof BigInt(123); // 타입은 'bigint' 
typeof Symbol('sym'); // 타입은 'symbol'

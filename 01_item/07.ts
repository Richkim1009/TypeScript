const x = 2 + '3';
const y = '2' + 3;
console.log(typeof x, typeof y, x, y);
// 타입스크립트는 런타임 동작으로 모델링하기 때문에 오류가 나지 않는다.

const a = null + 7;
const b = [] + 12;
alert('Hello', 'TypeScript');
// 런타임 오류가 발생하지 않는 코드인데, 타입 체커는 문제점을 표시합니다.

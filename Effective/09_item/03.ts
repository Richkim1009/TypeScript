const elNull = document.getElementById('foo'); // 타입은 HTMLElement || null
const el = document.getElementById('foo')!; // 타입은 HTMLElement

// 변수의 접두사로 쓰인 !는 boolean의 부정문
// 접미시로 쓰인 !는 그 값이 null이 아니라는 단언문으로 해석됩니다.
// 타입 단언문으로 무조건 타입을 변환 실킬 수는 없다.
// 서브타입일 경우에만 변환 시킬 수 있다.

interface Person2 {name: string;}
const body = document.body;
const el2 = body as Person;

const el3 = document.body as unknown as Person; // 정상


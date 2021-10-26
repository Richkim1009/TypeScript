// 타입이 값들의 집합이라고 생각하기

// 공집합: 아무런 값을 할당할 수 없음
const x: never = 12;

// 한 가지 값만 가지는 타입 : 리터럴 타입
type A = 'A';
type B = 'B';
type Twelve = 12;

// 두 개 혹은 새 개로 묶으려면 유니온 타입을 사용합니다.
// 합집합
type AB = 'A' | 'B';
type AB12 = 'A' | 'B' | 12;

const a: AB = 'A';
const c: AB = 'C';1

const ab: AB = Math.random() < 0.5 ? 'A' : 'B';
const ab12: AB12 = ab;

declare let twelve: AB12;
const back: AB = twelve;

interface Person {
  name: string;
}

interface Lifespan{
  birth: Date;
  death?: Date;
}
type PersonSpan = Person & Lifespan;

const ps: PersonSpan = {
  name: 'Alan Turing',
  birth: new Date('1912/06/23'),
  death: new Date('1951/06/07'),
};
// 인터섹션인 경우에 & 연산자는 필수 속성을 모두 포함하는 것이 일반 적이다.

type K = keyof(Person | Lifespan); // 타입이 never
type D = keyof(Person & Lifespan); // 둘중하나면 됨
// 인터페이스일 경우
// keyof (A&B) = (keyof A) | (keyof B)
// keyof (A|B) = (keyof A) & (keyof B)

interface Vector1D {x: number};
interface Vector2D extends Vector1D {y: number};
interface Vector3D extends Vector2D {z: number};
// extends 키워드는 부분집합이라는 걸로 받아 들이면 이해하기 쉽다.

function getKey<K extends string>(val: any, key: K) {}

getKey({}, 'x');
getKey({}, Math.random() < 0.5 ? 'a' : 'b');
getKey({}, document.title);
getKey({}, 12); // 12는 string의 부분집합이 아니다.

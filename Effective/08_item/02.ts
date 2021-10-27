interface Person {
  first: string;
  last: string;
}

const p: Person = {first: 'Jane', last: 'Jacobs'};

function email(p: Person, subject: string, body: string): Response {

}

class Cylinder {
  radius = 1;
  height = 1;
}

function calculateVolume(shape: unknown) {
  if(shape instanceof Cylinder) {
    shape;
    shape.radius;
  }
}

type T1 = typeof p;
type T2 = typeof email;

const v1 = typeof p;
const v2 = typeof email;

const v = typeof Cylinder;
type T = typeof Cylinder;

declare let fn: T;
const c = new fn();

type C = InstanceType<typeof Cylinder>;

const first: Person['first'] = p['first'];
// 타입을 얻을려면 obj[]를 써야한다

type PersonEl = Person['first' | 'last'];
type Tuple = [string, number, Date];
type Tuple = Tuple[number];

/*
  갑으로 쓰이는 this는 자바스크립트의 this, 타입으로 쓰이는 this는, 타입스크립트의 타입
  값에서 &, | 는 비트연산, 타입에선 인터섹션과 유니온
  const는 새 변수를 선언하지만, as const는 리터럴 또는 리터럴 표현식의 추뢴된 타입을 바꿉니다.
  extends는 서브클래스 또는 서브타입 또는 제너릭 타입의 한정자를 정의 할 수 있습니다.
  in은 루프 또는 매핑된 타입에 등장합니다.
*/


// 타입스크립트는 타입이 열려 있습니다.
// 타입에 선언된 속성 외에도 임의의 속성을 추가하더라도 오류가 발생하지 않는다는 것입니다.

function calculateLength1(v: Vector3D) {
  let length = 0;
  for(const axis of Object.keys(v)) {
    const coord = v[axis];
    length += Math.abs(coord);
  }
  return length;
}

const vec3D = {x: 3, y: 4, z: 1, address: '123 Broadway'};
calculateLength1(vec3D); // 정상, NaN을 반환합니다.
// 위처럼 address가 추가되어도 오류가 아니기때문에 v[axis]의 오류는 정당합니다.

// 루프보다는 모든 속성을 각각 더하는 구현이 더낫습니다.

function calculateLength2(v: Vector3D) {
  return Math.abs(v.x) + Math.abs(v.y) + Math.abs(v.z);
}

class C {
  foo: string;
  constructor(foo: string) {
    this.foo = foo;
  }
}

const c = new C('instance of C');
const d: C = {foo: 'object literal'};
// 클래스도 형식만 맞다면 그냥 사용가능
// 자바스크립트는 본질적으로 덕 타이핑 기반

interface Vector2D{
  x: number;
  y: number;
}

function calculateLength(v: Vector2D) {
  return Math.sqrt(v.x * v.x + v.y * v.y);
}

interface NamedVector {
  name: string;
  x: number;
  y: number;
}

const v: NamedVector = {x: 3, y: 4, name: 'Zee'};
calculateLength(v);

// 흥미로운 점은 Vector2D와 NamedVector의 관계를 전혀 선언하지 않았다는 것입니다.
// 타입스크립트 타입 시스템은 자바스크립트의 런타임 동작을 모델링합니다.
// NamedVector의 구조가 Vector2D와 호환되기 때문에 calculateLength 호출이 가능합니다.
// 구조적 타이핑 이라고 한다.

interface Vector3D {
  x: number,
  y: number,
  z: number;
}

function normalize(v: Vector3D) {
  const length = calculateLength(v);
  return {
    x: v.x / length,
    y: v.y / length,
    z: v.z / length,
  };
}

normalize({x: 3, y: 4, z: 5}); // 잘못된 결과가 나온다.

// 타입스크립트가 오류를 잡지 못한 이유는 calculateLength는 2D 벡터를 기반으로 연산을한다.
// z가 정규화에서 무시됨
interface Cylinder {
  radius: number;
  height: number;
}

const Cylinder = (radius: number, height: number) => ({radius, height});

function calculateVolume(shape: unkonwn) {
  if(shape instanceof Cylinder) {
    shape.radius;
  }
}
// instnaceof를 이용하여 Cylinder를 타입인지 체크 하려고 했으나,, instanceof는 자바스크립트 런타임 연사자이기 때문에, 값에 대하여 연산을 한다.
// 그래서 instanceof Cylinder는 타입이 아니라 함수를 참조합니다.

type T1 = 'string literal';
type T2 = 123;
const v1 = 'string literal';
const v2 = 123;



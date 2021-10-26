// 타입 정보를 유지하는 또 다른 방법으로는 런타임에 접근 가능한 타입 정보를 명시적으로 저장하는 태그 기법이 있다.
interface Square {
  // 태그기법
  kind: 'square';
  width: number;
}

interface Rectangle {
  kind: 'rectangle';
  height: number;
  width: number;
}

type Shape2 = Square | Rectangle;
function calculateArea2(shape: Shape2) {
  if(shape.kind === 'rectangle') {
    shape;
    return shape.width * shape.height;
  } else {
    shape;
    return shape.width * shape.width;
  }
}

// shape2 타입은 '태그된 유니온'의 한 예
// 이 기법은 런타임에 타입 정보를 손쉽게 유지할 수 있기 때문에, 타입스크립트에서 흔하게 볼 수 있습니다.

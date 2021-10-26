interface Square {
  width: number;
}
interface Rectangle extends Square {
  height: number;
}
type Shape = Square | Rectangle;

// function calculateArea(shape: Shape) {
//   if(shape instanceof Rectangle) {
//     // instanceof 체크는 런타임에 일어나지만, Rectangle은 타입이기 때문에 런타임 시점에 아무런 역할을 할 수 없습니다.
//     return shape.width * shape.height;
//   } else {
//     return shape.width * shape.width;
//   }
// } 

// 자바스크립트로 컴파일되는 과정에서 모든 인터페이스, 타입, 타입 구문은 그냥 제거되어 버립니다.

// 속성 체크는 런타임에 접근 가능한 값에만 관련되지만, 타입 체커 역시도 shape의 타입을 Rectangle로 보정해 주기 때문 오류가 사라짐
function calculateArea(shape: Shape) {
  if('height' in shape) {
    return shape.width * shape.height;
  } else {
    shape;
    return shape.width * shape.width;
  }
} 

// 타입(란타임 접근 불가) 과 값(런타임 접근 가능)을 둘 다 사용하는 기법도 있다.
// 타입을 클래스로 만들면 된다.
class Square2{
  constructor(public width: number) {}
}
class Rectangle extends Square2 {
  constructor(public width: number, public height: number) {
    super(width);
  }
}

type Shape3 = Square2 | Rectangle;

function calculateArea3(shape: Shape3) {
  if(shape instanceof Rectangle) {
    shape;
    return shape.width * shape.height;
  } else {
    shape;
    return shape.width * shape.width;
  }
}

// 인터페이스는 타입으로만 사용 가능하지만, Rectangle을 클래스로 선언하면 타입과 값으로 모두 사용할 수 있으므로 오류가 없다.
// type Shape = Square | Rectangle에서는 타입으로 참조되지만 intanceof에선 값으로 참조됩니다.
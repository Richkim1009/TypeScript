// let x = 'hello';
// x = 1234

// interface Square {
//   kind: 'sqaure'
//   width: Number
// }

// interface Rectangle extends Square {
//   kind: 'rectangle'
//   height: number
// }

// | union
// type Shape = Square | Rectangle

// function calculateArea(shape: Shape) {
//   if(shape instanceof Rectangle) {
//     return shape.width * shape.height;
//   } else {
//     return shape.width * shape.width;
//   }
// }

// function calculateArea(shape: Shape) {
//   if('height' in shape) {
//     return shape.width * shape.height;
//   } else {
//     return shape.width * shape.width;
//   }
// }

// function calculateArea(shape: Shape) {
//   if(shape.kind === 'rectangle) {
//     return shape.width * shape.height;
//   } else {
//     return shape.width * shape.width;
//   }
// }

// calculateArea({
//   height: 100,
//   width: 100,
//   kind: 'sqaure'
// })

class Square {
  constructor(public width: number) {}
}

class Rectangle extends Square {
  constructor(public width: number, public height: number) {
    super(width)
  }
}

// 타입으로도 사용가능 하고 인스턴스로도 사용가능함
type Shpae = Square | Rectangle

function calculateArea(shape: Shape) {
  if(shape instanceof Rectangle) {
    shape
    return shape.width * shape.height;
  } else {
    shape
    return shape.width * shape.width;
  }
}


function asNumber(val: number | string) :number {
  // number로 항상 
  return val as number;
}

function turnLigthOn () {}
function turnLigthOff () {}

function setLightSwitch(value : boolean) {
  switch(value) {
    case true:
      turnLigthOn()
      break;
    case false:
      turnLigthOff()
      break;
    default:
      console.log(`I'm afraid I can't do that.`)
  }
}

// 타입스크립트는 함수 오버로딩은 불가능 합니다.
// 타입에 관해서는 오버로딩 가능

function add(a: number, b: number) :number
function add(a:string, b:string) : string

function add(a: any, b: any) {
  return a + b;
}

const three = add(1, 2);
const twelve = add('1', '2')


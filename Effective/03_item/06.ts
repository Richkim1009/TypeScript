// 타입 연산은 런타입에 영향을 주지 않습니다.

// 타입체커를 통과하지만 잘못된 작성 방식
function asNumber(val: number | string): number {
  return val as number; // as는 타입 연산이고 런타임 동작에 영향을 주지 않음
}

// 값을 정제하기 위해서는 런타임의 타입을 체크해야 한다.
function asNumber2(val: number | string): number {
  return typeof(val) === 'string' ? Number(val) : val;
}
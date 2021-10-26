function add(a, b) {
  return a + b;
}
// noImplicitAny : 변수들이 미리 정의된 타입을 가져야 하는지 여부를 제어 합니다.
// 이코드는 noImplicitAny 옵션이 꺼져 있어야 유효하다.
add(10, null);

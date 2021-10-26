// 타입 스크립트 타입으로는 함수를 오버로드 할 수 없습니다.

function add(a: number, b: number) {return a + b;}
function add(a: string, b: string) {return a + b;}


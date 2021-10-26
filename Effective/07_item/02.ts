interface Point {
  x: number;
  y: number;
}
type PointKeys = keyof Point;

function sortBy<K extends keyof T, T>(vals: T[], key: K): T[] {
  vals.sort((a, b) => (a[key] === b[key] ? 0 : a[key] < b[key] ? -1 : +1))
  return vals;
}
const pts: Point[] = [{x: 1, y: 1}, {x: 2, y: 0}];
sortBy(pts, 'x');
sortBy(pts, 'y');
sortBy(pts, Math.random() < 0.5 ? 'x' : 'y');
sortBy(pts, 'z');

const list = [1, 2];
const tuple : [number, number] = list

const triple: [number, number, number] = [1,2,3];
const double: [number, number] = triple;

// 타입스크립트는 숫자의 쌍을 {0: number, 1: number}로 모델링하지 않고, {0: number, 1: number, 2: number}로 모델링
// length의 값이 맞지 않기 때문에 할당문에 오류가 발생했습니다.
// 타입의 값이 집합이라는 건, 동일한 값의 집합을 가지는 두 타입은 같다는 의미가 됩니다.

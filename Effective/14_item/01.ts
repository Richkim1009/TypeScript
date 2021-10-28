console.log('Cylinder 1 x 1',
  'Surface area:', 6.283185 * 1 * 1 + 6.283185 * 1 * 1,
  'Volume:',  3.14159 * 1 * 1 * 1);
console.log('Cylinder 1 x 2',
  'Surface area:', 6.283185 * 1 * 1 + 6.283185 * 2 * 1,
  'Volume:',  3.14159 * 1 * 2 * 1);
console.log('Cylinder 2 x 1',
  'Surface area:', 6.283185 * 2 * 1 + 6.283185 * 2 * 1,
  'Volume:',  3.14159 * 2 * 2 * 1);

const surfaceArea = (r, h) => 2 * Math.PI * r * (r + h);
const volume = (r, h) => Math.PI * r * r * h;
for(const [r, h] of [[1, 1], [1, 2], [2, 1]]) {
  console.log(
    `Cylinder ${r} x ${h}`,
    `Surface area: ${surfaceArea(r, h)}`,
    `Volume: ${volume(r, h)}`
  );
}

interface Person {
  firstName: string;
  middleName: string;
  lastName: string;
}

interface PersonWithBirthDate {
  firstName: string;
  lastName: string;
  date: Date;
} 

function distance1(a: {x: number, y: number}, b: {x: number, y: number}) {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}

interface Point2D {
  x: number;
  y: number;
}

function distance2(a: Point2D, b: Point2D) {}

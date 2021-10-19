// 아무타입도 받지 않음
const x: never = 12;

// 타입한개만 받음
type A = 'A';
type b = 'B';
type Twelve = 12; // const Twelve = 12 변경 불가능해서 타입이 됨

// union 합집합
type AB = 'A' | 'B';
type AB12 = 'A' | 'B' | 12;

const a: Ab = 'A';
const c: AB = 'C';

const ab: AB = Math.random() < 0.5 ? 'A' : 'B';
const ab12: AB12 = ab;

declare let twelve: AB12;
const back: AB = twelve;

interface Identified {
  id: string;
}

interface Person {
  name: string;
}

interface Lifespan {
  birth: Date;
  death?: Date;
}

type PersonSpan = Person & Lifespan;

const ps: PersonSpan = {
  name: 'Alan Truing', 
  birth: new Date('1912/06/23'),
  death: new Date('1954/06/07')
}

type K = keyof (Person | Lifespan);

keyof (A&B) = (keyof A) | (keyof B)
keyof (A|B) = (keyof A) & (keyof B)

/*
  interface Person {
    name: string;
  }

  interface PersonSpan extends Person {
    birth: Date;
    death?: Date;
  }
*/

interface Vector1D {x: number;}
interface Vector2D extends Vector1D {y: number;}
interface Vector3D extends Vector2D {z: number;}

getKey({}, 'x');
getKey({}, Math.random() < 0.5 ? 'a' : 'b');
getKey({}, document.title);
getKey({}, 12);

interface Point {
  x: number;
  y: number;
}

type PointKeys = keyof Point;

function sortBy<K extends keyof T, T> (vals: T[], key: K): T[] {

}

const pts: Point[] = [{x: 1, y: 1}, {x: 2, y: 0}];
sortBy(pts, 'x');
sortBy(pts, 'y');
sortBy(pts, Math.random() < 0.5 ? 'x' : 'y');

sortBy(pts, 'z');

const list = [1, 2];
const tuple: [number, number] = list;
const triple: [number, number, number] = [1,2,3];
const double: [number, number] =  triple;

type T = Exclude<string|Date, string|number>;
type NonZeroNums = Exclude<number, 0>;
const pt = {};
pt.x = 3;
pt.y = 4;

interface Point {x: number; y: number;}
const pt2: Point = {};
pt.x = 3;
pt.y - 4;

const pt3 = {
  x: 3,
  y: 4,
}

const id3 = {name: 'Pythagoras'}
const namedPoint = {...pt, ...id3};
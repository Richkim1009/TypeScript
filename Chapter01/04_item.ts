interface Vector2D {
  x : number
  y : number
}

function calculateLength(v: Vector2D) {
  return Math.sqrt(v.x * v.x + v.y * v.y)
}


interface NamedVector {
  name: string
  x: number
  y: number
}

const v: NamedVector = {x: 3, y: 4, name: 'Zee'};
calculateLength(v);

interface Vector3D {
  x: number
  y: number
  z: number
}

function normalize(v: Vector3D) {
  const length = calculateLength(v)
  return {
    x: v.x / length,
    y: v.y / length,
    z: v.z / length,
  }
}

function calculateLength1(v: Vector3D) {
  let length = 0;
  for(const axis of Object.keys(v)) {
    // coord 가 number로 추론되어야 하지만 any로 추론됨 오류가 아니다.
    const coord = v[axis];
    length += Math.abs(coord);
  }
  return length;
}

const vec3D = {x : 3, y: 4, z: 1, address: '123 Broadway'}
calculateLength1(vec3D);

class C {
  foo : string
  constructor( foo: string) {
    this.foo = foo
  }
}

const c = new C('instance of C')
// 타입으로 사용할때는 C의 형태만 갖춰진다면 참으로 판단한다.
const d: C = {foo: 'object literal'}

interface PostgresDB {
  runQuery: (sql: string) => any[]
}

interface Author {
  first: string
  last: string
}

function getAuthors(database: PostgresDB): Author[] {
  const authorRows = database.runQuery(`SELECT FIRST, LAST FROM AUTHORS`)
  return authorRows.map(row) => ({first: row[0], last: row[1]})
}
function add(a: number, b: number) {return a + b;}
function sub(a: number, b: number) {return a - b;}
function mul(a: number, b: number) {return a * b;}
function div(a: number, b: number) {return a / b;}
type BinaryFn = (a: number, b: number) => number;
const add2: BinaryFn = (a, b) => a + b;
const sub2: BinaryFn = (a, b) => a - b;
const mul2: BinaryFn = (a, b) => a * b;
const div2: BinaryFn = (a, b) => a / b;
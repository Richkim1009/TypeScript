// function add(a, b) {
//   return a + b;
// }

// add(10, null);

function add(a: number, b: number) {
  return a + b;
}

// type에 관해서는 | 하나만 쓰면 된다.
const x: number | null = null;

const el = document.getElementById('status')

// Object is possibly 'null' - 객체가 널일 가능성도 있다.
// el.textContent = 'Ready';

if(el) {
  el.textContent = 'Ready'
}
el!.textContent = 'Ready' // 강제로  non-null을 캐스팅한것



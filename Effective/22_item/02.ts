// 타입스크립트가 타입을 식별하지 못한다면ㄴ, 식별을 돕기 위해 커스텀 함수를 도입

function isInputElement(el: HTMLElement): el is HTMLInputElement {
  return 'value' in el;
}

function getElementContent(el: HTMLElement) {
  if(isInputElement(el)) {
    el;
    return el.value;
  }
  el;
  return el.textContent;
}

const jackson5 = ['Jackie', 'Tito', 'Jermaine', 'Marlon', 'Michael'];
const memebers = ['Janet', 'Michael'].map(
  who => jackson5.find(n => n === who)
)

const memebers2 = ['Janet', 'Michael'].map(
  who => jackson5.find(n => n === who)
).filter(who => who !== undefined);

// ************* 타입 가드 *************
function isDefined<T>(x: T | undefined): x is T {
  return x !== undefined;
} // x 가 undefined가 아닐때 x 는 T에 부분집합이다 라고 알려주는 역할 

const members = ['Janet', 'Michael'].map(
  who => jackson5.find(n => n === who)
).filter(isDefined);
const people1 = ['alice', 'bob', 'jan'].map(name => ({name}));
const people2 = ['alice', 'bob', 'jan'].map(name => ({} as Person)); // 타입 단언을 쓰면 런타임에 문제가 발생 한다.

const people3 = ['alice', 'bob', 'jan'].map(name => ({} as Person)); // 쓰지마라

const people4 = ['alice', 'bob', 'jan'].map(name => {
  const person: Person = {name};
  return person;
});

const people5 = ['alice', 'bob', 'jan'].map((name):Person => ({name}));
// const people5 = ['alice', 'bob', 'jan'].map((name:Person)  => ({name}));

const people6: Person[] = ['alice', 'bob', 'jan'].map((name): Person => ({name}));

document.querySelector('#myButton')?.addEventListener('click', e=> {
  e.currentTarget;
  const button = e.currentTarget as HTMLButtonElement;
  button;
})



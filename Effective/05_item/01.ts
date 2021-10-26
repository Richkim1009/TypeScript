// any타입 지양하기
let age: number;
age = '12';
age = '12' as any; // as(타입 단언문)

// 함수를 작성할 때는 시그니처를 명시해야 합니다.

function calculateAge(birthDate: Date): number {
  return 1;
}

let birthDate: any = '1990-01-19';
calculateAge(birthDate);

// any타입을 사용하면 calculateAge의 시그니처를 무시하게 된다.

let person: any = {first: 'George', last: 'Washington'};
// any타입에는 언어 서비스가 적용이 안됩니다.

interface Person {
  first: string;
  last: string;
}

const formatName = (p: Person) => `${p.first} ${p.last}`;
const formatNameAny = (p: any) => `${p.first} ${p.last}`;

// interface ComponentProps {
//   onSelectItem: (item: any) => void;
// }

function renderSelector(props: ComponentProps) {
  return props;
}

let selectedId: number = 0;

function handleSelectItem(item: any) {
  selectedId = item.id;
}

interface ComponentProps {
  onSelectItem: (id: number) => void;
}


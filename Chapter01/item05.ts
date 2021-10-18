// any type 지양 하기

let age: number
age = '12';

age = '12' as any

age += 1

function calculateAge(birthDate: Date): number {
  return 0;
}

let birthDate: any = '1990-01-19'

// :any 를 하면 .first가 자동완성 되지 않음
let person = {first: 'George'}
person.first

interface Person{
  first: string
  last: string
}

const formatName = (p: Person) => `${p.first} ${p.last}`
const formatNameAny = (p: any) => `${p.first} ${p.last}`

interface ComponentProps {
  onSelectItem: (item: any) => void
}
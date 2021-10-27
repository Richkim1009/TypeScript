function email(optins: {person: Person, subject: String, body: string}) {

}

function email({person, subject, body}) {

}

function email({person: Person, subject: string, body: string}) {}
// 타입스크립트에서 사용하면 오히려 이상한 결과를 불러온다.
// 값의 관점에서 person과 string이 해석되었기 때문에 오류가 발생했습니다.
// Person이라는 변수명과 string이라는 이름을 가지는 두 개의 변수를 생성하려 한 것입니다.

function email({person, subject, body}: {person: Person, subject: string, body: string}) {} // 이렇게 사용해야 한다.

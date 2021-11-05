// ***** 타입 *****
// 가장 작은 집합: never(공집합)
// 단일 집합: unit(리터럴)
// 2개 이상 집합: 유니온(합집합), 인터섹션(교집합)

// interface extends는 부분집합이라는 뜻으로 해석한다면 굉장히 쉽다.
// Exclude 공통된 타입을 빼버림

// class는 타입과 값 둘다 쓰임
// 타입으로 쓰일때는 필드, 메소드와 같이 형태로쓰인다.
// 값으로 쓰일때는 생성자가 사용된다.

// class의 typeof는 상황에 따라 다르게 쓰인다.
// 값으로 이용될때는 function const v = type Cylinder; "function"
// type으로 이용될때는 new 키워드를 사용할 때 볼 수 있는 생성자 함수 type T = typeof Cylinder; "typeof Cylinder"
// InstanceType 제너릭을 사용해 생성자 타입과 인스턴스 타입을 전환할 수 있습니다. type C = Instance<typeof Cylinder>; 타입이 Cylinder

// 타입의 속성을 얻을때는 무조건 obj['field']를 사용해야 한다. const first: Person['first'] = p['first'] or p.first;

// 타입스크립트의 구조 분해 할당
/*
  function email(
    {person, subject, body}: {person:Person, subject: string, body: string}
  ) {}
*/


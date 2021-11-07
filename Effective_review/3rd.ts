// 함수는 문장보다는 표현식을 사용한다.
// 함수 자체를 type으로 설정 하는게 좋다.

// 클래스를 구현할때는 class 클래스이름 implements 인터페이스 or 타입 {}으로 사용한다.

// 인터페이스는 보강이 가능하고, 타입은 보강이 안된다.

// 매핑된 타입
/*  type derivedState = {
      [k in 'property1' | 'property2' | 'property3']: Base[k] 
    }
*/
// type Pick<T, K> = {[k in K]: T[k]};
// type derivedState = Pick<Base, 'property1' | 'property2' | 'property3'>;

// 선택적 속성 제너릭
// Partial<Options>

// 반환 값에 명명된 타입 얻어오기
// ReturnType<typeof function>;


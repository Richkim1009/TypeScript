interface State {
  name: string;
  capital: string;
}

const states: State[] = [
  {name: 'Alabama', capitol: 'Montgomery'},
  {name: 'Alaska', capitol: 'Juneau'},
  {name: 'Arizona', capitol: 'Pheonix'}
];

// 명시적으로 표현한다면 어디가 오타인지를 알수 있습니다.
interface Options {
  title: string;
  darkMode?: boolean;
}

function createWindow(options: Options) {
  if(options.darkMode) {
    setDarkMode();
  }
}
createWindow({
  title: 'Spider Solitaire',
  darkmode: true
});

const o1: Options = document;
const o2: Options = new HTMLAnchorElement;

// 객체리터를은 잉여 속성체크(엄격한 객체 리터럴 체크)가 실행된다.

const o: Options = {darkmode: true, title: 'Ski Free'};
const intermediate = {darkmode: true, title: 'Ski Free'};
const o3: Options = intermediate;
const o4 = {darkmode: true, title: 'Ski Free'} as Options; // 잉여 속성 체크는 타입 단언문을 사용할 때에도 적용되지 않습니다.

// 잉여 속성 체크를 원치 않는다면, 인덱스 시그니처를 사용해서 타입스크립트가 추가적인 속성을 예상하도록 할 수 있습니다.

// 선택적 속성만 가지는 약한 타입에도 비슷한 체크가 동작합니다.
interface Options2 {
  darkMode?: boolean;
  [otherOptions: string]: unknown;
}
const o5: Options = {darkMode: true};

interface LindChartOptions {
  logscale?: boolean;
  invertedYAxis?: boolean;
  areaChar?: boolean;
}
const opts = {logScale: true, };
const o6: LindChartOptions = opts;
// 구조적 관점에서 LineChartOptions 타입은 모든 속성이 선택적이므로 모든 객체를 포함할 수 있습니다.
// 약한 타입에 대해서 타입스크립트는 값 타입과 선언 타입에 공통된 속성이 있는지 확인하는 별도의 체크를 수행합니다.
// 약한 타입과 값을 비교할때는 값에 약한속성 타입이 하나도 없거나 하나 이상 들어있어야 한다.

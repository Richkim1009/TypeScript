const rocket = {
  name: 'Falcon 9',
  variant: 'Block 5',
  thrust: '7.607 kN'
};

type Rocket = {[property: string]: string};
const rocket2: Rocket = {
  name: 'Falcon 9',
  variant: 'v1.0',
  thrust: '4,940 kN'
};

interface Rocket2 {
  name: string;
  variant: string;
  thrust_kN: number;
}

const falconHeavy: Rocket2 = {
  name: 'Falcon Heavy',
  variant: 'v1',
  thrust_kN: 15_200,
};
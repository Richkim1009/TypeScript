const INIT_OPTIONS = {
  width: 640,
  height: 480,
  color: '#00ff00',
  label: 'VGA'
};

interface Options3 {
  width: number;
  height: number;
  color: string;
  label: string;
}

type Options4 = typeof INIT_OPTIONS;

function getUserInfo(userId: string){
  return {
    userId,
    name,
    age,
    height,
    weight,
    favoriteColor,
  };
}

type UserInfo = ReturnType<typeof getUserInfo>;

interface Name {
  first: string;
  last: string;
}

type DancingDuo<T extends Name> = [T, T];

const couple1: DancingDuo<Name> = [
  {first: 'Fred', last: 'Astaire'},
  {first: 'Ginger', last: 'Rogers'}
];
const couple2: DancingDuo<{first: string;}> = [
  {first: 'Sonny'},
  {first: 'Cher'},
]

type Pick<T, K> = {
  [k in K]: T[k]
};

type Pick<T, K extends keyof T> = {
  [k in K]: T[k]
};
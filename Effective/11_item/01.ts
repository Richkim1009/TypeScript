interface Room {
  numDoors: number;
  ceilingHeightFt: number;
}

const r: Room = {
  numDoors: 1,
  ceilingHeightFt: 10,
  elephant: 'present',
}; // 잉여속성 체크 발동 x

const obj = {
  numDoors: 1,
  ceilingHeightFt: 10,
  elephant: 'present',
};

const r2: Room = obj; // 잉여속성 체크 발동 o



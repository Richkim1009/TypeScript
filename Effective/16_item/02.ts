function checkedAccess<T>(xs: ArrayLike<T>, i: number) {
  if(i < xs.length) {
    return xs[i];
  }
  throw new Error(`배열의 끝을 지나서 ${i}를 접근하려고 했습니다.`);
}

const tupleLike: ArrayLike<string> = {
  '0': 'A',
  '1': 'B',
  length: 2,
};

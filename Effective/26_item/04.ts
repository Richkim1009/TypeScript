{
  type CB = (a: number, b: number) => void;
  function callWithRandomNumbers(fn: (n1: number, n2: number) => void) {
    fn(Math.random(), Math.random())
  }

  callWithRandomNumbers((a, b) => {
    console.log(a, b);
  });

  const fn = (a, b) => {
    console.log(a + b);
  }
  callWithRandomNumbers(fn);
  
  const cb: CB = (a, b) => {
    a;
    b;
    console.log(a + b);
  }
  callWithRandomNumbers(cb);
}
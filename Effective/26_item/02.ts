{
  function panTo(where: [number, number]) {}
  panTo([10,20]);
  // const loc: [number, number] = [10, 20];
  const loc = [10, 20] as const;
  panTo(loc);
}

{
  function panTo(where:  readonly [number, number]) {}
  panTo([10,20]);
  const loc = [10, 20] as const;
  panTo(loc);
}
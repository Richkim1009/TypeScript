interface ScatterProps {
  xs: number[]
  ys: number
  xRange: [number, number]
  yRange: [number, number]
  color: string
  onclick: (x: number, y: number, index: number) => void
}

function shouldUpdate(
  oldProps: ScatterProps,
  newProps: ScatterProps
) {
  let k: keyof ScatterProps;
  for (k in oldProps) {
    if(oldProps[k] !== newProps[k]) {
      if(k !== 'onclick') return true;
    }
  }
  return false;
}

function shouldUpdate2(
  oldProps: ScatterProps,
  newProps: ScatterProps
) {
  return (
    oldProps.xs !== newProps.xs ||
    oldProps.ys !== newProps.ys ||
    oldProps.xRange !== newProps.xRange ||
    oldProps.yRange !== newProps.yRange ||
    oldProps.color != newProps.color
  );
}
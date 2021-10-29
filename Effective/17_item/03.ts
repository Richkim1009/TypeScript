const dates: readonly Date[] = [new Date()]
dates.push(new Date())

dates[0].setFullYear(2037)

interface Outer {
  inner: {
    x: number;
  }
}

const oo: Readonly<Outer> = {inner: {x: 0}}
oo.inner = {x: 1}
oo.inner.x = 1;
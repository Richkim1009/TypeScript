type AorB = 'a' | 'b';

type Input = {};
type Output = {};
interface VariableMap {
  [name: string]: Input | Output;
}

type NamedVariable = (Input | Output) & {name: string};

type Pair = [number, number];
type StringList = string[];
type NamedNumbs = [string, ...number[]];

interface Tuple2 {
  0: number;
  1: number;
  length: 2;
}
const t: Tuple2 = [10, 20];


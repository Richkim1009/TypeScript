type TState = {
  name: string;
  capital: string;
}

interface IState {
  name: string;
  capital: string;
}

const wyoming: TState = {
  name: 'Wyoming',
  capital: 'Cheyenne',
  population: 500_000
}

type TDIct = {[key: string]: string};
interface IDict {
  [key: string]: string;
}
 
type TFn = (x: number) => string;

interface IFn {
  (x: number): string;
}

const toStrT: TFn = x => '' + x;
const toStrI: IFn = x => '' + x;

type TFnWithProperties = {
  (x: number): number;
  prop: string;
}

interface IFnWithProperties {
  (x: number): number;
  prop: string;
}

type TPair<T> = {
  fist: T,
  second: T
}

interface IPair<T> {
  first: T;
  second: T;
}

interface IStateWithPop extends TState {
  population: number;
}

type TstateWithPop = IState & {population: number;};

const ss: IStateWithPop = {

}
const sss: TstateWithPop = {

}

class StateT implements TState {
  name: string = '';
  capital: string = '';
}

class StateI implements IState {
  name: string = '';
  capital: string = '';
}
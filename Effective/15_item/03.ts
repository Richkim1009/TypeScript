interface Row1 {[column: string]: number}
interface Row2 {a:number; b?: number; c?: number; d?: number}
type Row3 = | {a: number;} | {a: number; b: number} | {a: number; b: number; c:number}
| {a: number; b: number; c:number; d:number;} 

type Vec3D = Record<'x' | 'y' | 'z', number>;

type Vec3D2 = {[k in 'x' | 'y' | 'z']: number};
type ABC = {[k in 'a' | 'b' | 'c']: k extends 'b' ? string: number};
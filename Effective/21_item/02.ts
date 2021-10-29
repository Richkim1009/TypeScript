const mixed = ['x', 1];

// 명시적 타입구문 제공
 const vv: {x: 1|3|5} = {
   x: 1,
 };

 const v1 = {
   x: 1, 
   y: 2,
 }

 const v2 = {
   x: 1 as const,
   y: 2
 }
 
 const v3 = {
   x: 1,
   y: 2,
 } as const;

 let ttt = 3;
 const tttt = 3;

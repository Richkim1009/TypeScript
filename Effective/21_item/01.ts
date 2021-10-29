interface Vector3 {x: number; y: number; z: number}

function getComponent(vector: Vector3D, axis: 'x' | 'y' | 'z') {
  return vector[axis];
}

const xxx = 'x';
let vec = {x: 10, y: 20, z: 30};
getComponent(vec, xxx);
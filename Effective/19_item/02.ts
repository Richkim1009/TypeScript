function square(nums: number[]) {
  return nums.map(x => x * x);
}
const squares = square([1,2,3,4]);

const axis1: string = 'x';
const axis2 = 'y';

interface Product {
  id: string;
  name: string;
  price: number;
}

function logProduct(product: Product) {
  const id: number = product.id;
  const name: string = product.name;
  const price: number = product.price;
  console.log(id, name, price);
}

function logProduct2({id, name, price}: Product) {
  console.log(id, name, price);
}
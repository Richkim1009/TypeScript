function fetchProduct(id: string) {}
function fecthProductBySerialNumber(id: number) {}

let id: string | number = "12-34-56";
fetchProduct(id);
id = 123456;
fecthProductBySerialNumber(id);

const id2 = '12-34-56';
fetchProduct(id2);
{
  const id = 123456;
  fecthProductBySerialNumber(id);
}
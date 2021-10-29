async function getNumber() {
  return 42;
}

const getNumber2 = async () => 42;

const getNubmer3 = () => Promise.resolve(42); 

async function getJSON(url: string) {
  const response = await fetch(url);
  const jsonPromise = response.json();
  return jsonPromise;
}
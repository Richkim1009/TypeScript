let num = 10;
// 타입 추론

function add(a: number, b: number) {
  return a + b;
}

function logMessage(message: string | null) {
  if(message) {
    message;
  }
}

const foo = {
  x: [1,2,3],
  bar: {
    name: 'Fred'
  }
}

function restOfPath(path: string) {
  return path.split('/').slice(1).join('/');
}

function getElement(elOrId: string|HTMLElement|null): HTMLElement | null {
  if(typeof elOrId === 'object') {
    return elOrId;
  } else if(elOrId === null) {
    return document.body;
  } else {
    const el  = document.getElementById(elOrId);
    return el;
  }
}

const response = fetch('http://example.com');
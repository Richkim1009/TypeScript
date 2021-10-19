let num = 10;

function add(a: number, b: number) {
  return a + b;
}

function logMessage(msg: string | null) {
  if(msg){
    msg
  }
}

const foo = {
  x: [1,2,3], // tuple
  bar: {
    name: 'fred'
  }
}

function restOfPath(path: string) {
  return path.split('/').slice(1).join('/')
}

function getElement(elOrId: string | HTMLElement | null): HTMLElement {
  if(typeof elOrId === 'object') {
    return elOrId
  } else if(elOrId === null) {
    return document.body
  } else {
    const el = document.getElementById(elOrId)
    return el
  }
}

const response = fetch('http://example.com');


const aa: number[] = [1,2,3];
const bbb: readonly number[] = a;
const cc: number[] = bbb;

function parseTaggedText(lines: string[]): string[][] {
  const parahraphs: string[][] = [];
  const currPara: string[] = [];

  const addParagraph = () => {
    if(currPara.length) {
      parahraphs.push(currPara);
      currPara.length = 0;
    }
  }

  for(const line of lines) {
    if(!line) {
      addParagraph();
    } else {
      currPara.push(line);
    }
  }
  addParagraph();
  return parahraphs;
}

function parseTaggedText2(lines: string[]): (readonly string[])[] {
  const parahraphs: (readonly string[])[] = [];
  let currPara: readonly string[] = [];

  const addParagraph = () => {
    if(currPara.length) {
      parahraphs.push(currPara);
      currPara = [];
    }
  }

  for(const line of lines) {
    if(!line) {
      addParagraph();
    } else {
      currPara = currPara.concat([line]);
    }
  }
  addParagraph();
  return parahraphs;
}
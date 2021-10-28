interface Options {
  width: number
  height: number
  color: string
  label: string
}

interface OptionsUpdate {
  width?: number;
  height?: number;
  color?: string;
  label?: string;
}

class UIWidget {
  constructor(init: Options) {

  }
  update(options: OptionsUpdate) {

  }
}

type OptionsUpdate2 = {[k in keyof Options]?: Options[k]};
type OptionsUpdate3 = Partial<Options>;
type OptionsKeys = keyof Options;

class UIWidget2 {
  constructor(init: Options) {}
  update(options: Partial<Options>) {}
}
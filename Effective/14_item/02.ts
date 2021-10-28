interface State {
  userId: string;
  pageTitle: string;
  recentFiles: string[];
  pageContents: string;
}

interface TopNavState {
  userId: string;
  pageTitle: string;
  recentFIles: string[];
}

type TopNavState2 =  {
  userId: State['userId'];
  pageTitle: State['pageTitle'];
  recentFIles: State['recentFiles'];
};

type TopNavState3 = {
  [k in 'userId' | 'pageTitle' | 'recentFiles']: State[k]
}; // pick이라고 한다.

type TopNavState4 = Pick<State, 'userId' | 'pageTitle' | 'recentFiles'>;

interface SaveAction {
  type: 'save';
}

interface LoadAction {
  type: 'load';
}

type Action = SaveAction | LoadAction;
type ActionType = 'save' | 'load';

type ActionType2 = Action['type'];

type ActionRec = Pick<Action, 'type'>;    
import produce, {Draft} from 'immer';
import {handleActions} from 'redux-actions';
import {Reducer, Action} from 'redux';

import actions from '../actions';
import initialState from '../store/initialState';

const reducer: Reducer<MeStore, any> = handleActions(
  {
    [`${actions.me.updateMe}`](state: MeStore, action: Action<any>) {
      const newState = produce(state, (draftState: Draft<MeStore>) => {});
      return newState;
    },
  },
  initialState.me
);

export default reducer;

import {createActions} from 'redux-actions';

const actions = createActions({
  updateMe: (me: MeStore) => {
    return {me};
  },
});

export default actions;

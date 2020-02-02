import {bindActionCreators, compose} from 'redux';
import {connect} from 'react-redux';

import {Top} from './../../templates';
import actions from './../../redux/actions';

const mapStateToProps = (state: any) => ({
  me: state.me,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    actions: {
      // bindActionCreators = actionCreator(s)とdispatchを一緒にしてコンポーネントにprops.actionsとして渡すことができる
      me: bindActionCreators(actions.me, dispatch),
    },
  };
};

export default compose<any>(connect(mapStateToProps, mapDispatchToProps))(
  Top.Main
);

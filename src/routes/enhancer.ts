import {compose, bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import actions from '@actions';

const mapStateToProps = (state: any) => ({
  me: state.me,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    actions: {
      me: bindActionCreators(actions.me, dispatch),
    },
  };
};

export default compose<any>(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
);

import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import Index from './Index.jsx';
import * as actions from '../../redux/action/_example.js';

function mapStateToProps(state) {
  return {
    values: state._example,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onUpdate: actions.onUpdate,
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));

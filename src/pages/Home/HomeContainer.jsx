import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import Home from './Home.jsx';
import * as actions from '../../redux/action/_example.js';

function mapStateToProps(state) {
  return {
    warterMarkText: state._example.warterMarkText,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onUpdate: actions.onUpdate,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

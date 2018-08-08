import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import App from './App.jsx';

function mapStateToProps(state) {
  return {
  };
}

export default withRouter(connect(mapStateToProps)(App));

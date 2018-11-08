import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import App from './App.jsx';

function mapStateToProps(state) {
  return {
    warterMarkText: state._example.warterMarkText,
  };
}

export default withRouter(connect(mapStateToProps)(App));

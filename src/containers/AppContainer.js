import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateRegister, updateIssues } from '../actions';
import { App } from '../App';

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateRegister, updateIssues }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(App);

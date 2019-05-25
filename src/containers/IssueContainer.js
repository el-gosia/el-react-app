import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleIssueStatus } from '../actions';

import { Issue } from '../components/Issue';

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleIssueStatus }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Issue);

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Sidebar } from '../components/Sidebar';
import { setFilter, filterIssues } from '../actions';

const mapStateToProps = state => ({
  issues: state.issues,
  register: state.register.all,
  countNo: state.register.count,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setFilter, filterIssues }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);

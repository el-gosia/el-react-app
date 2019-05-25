import { connect } from 'react-redux';

import { Content } from '../components/Content';

const mapStateToProps = state => ({
  issues: state.issues,
  records: state.register.filtered,
  filter: state.filter,
});

export default connect(mapStateToProps)(Content);

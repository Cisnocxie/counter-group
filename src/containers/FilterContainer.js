import { connect } from 'react-redux';
import Filter from '../components/Filter';

const mapStateToProps = state => {
  return {
    statusOfList: state.filter
  };
};

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);

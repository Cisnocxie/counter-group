import { connect } from 'react-redux';
import Filter from '../components/Filter';
import * as actions from '../actions';

const mapStateToProps = state => {
  return {
    statusOfList: state.filter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showFilterList: event => {
      const statusOfList = event.target.attributes.getNamedItem('data-filter')
        .value;
      dispatch(actions.setStatusOfList(statusOfList));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);

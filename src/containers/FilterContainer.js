import { connect } from 'react-redux';
import Filter from '../components/Filter';

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
      dispatch({ type: 'SET_STATUS_OF_LIST', statusOfList });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);

import { connect } from 'react-redux';
import { showSnackbar, addFile, deleteFiles, 
  setLayout, setVisibilityFilter } from '../actions';
import Toolbar from '../components/Toolbar';

const mapStateToProps = state => ({
  files: state.files,
  visibilityFilter: state.visibilityFilter,
  layout: state.layout
})

const mapDispatchToProps = dispatch => ({
  showSnackbar: (alertType, message) => dispatch(
    showSnackbar(alertType, message)
  ),
  addFile: file => dispatch(addFile(file)),
  deleteFiles: () => dispatch(deleteFiles()),
  setVisibilityFilter: visibilityFilter => dispatch(
    setVisibilityFilter(visibilityFilter)
  ),
  setLayout: layout => dispatch(setLayout(layout))
})

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
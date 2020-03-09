import { connect } from 'react-redux';
import { hideSnackbar } from '../actions';
import SnackbarAlert from '../components/SnackbarAlert';

const mapStateToProps = state => ({
  snackbar: state.snackbar
})

const mapDispatchToProps = dispatch => ({
  handleClose: () => dispatch(hideSnackbar())
})

export default connect(mapStateToProps, mapDispatchToProps)(SnackbarAlert);
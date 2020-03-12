import { connect } from 'react-redux';
import Main from '../components/Main';
import { getVisibleTodos } from '../actions'

const mapStateToProps = state => ({
  files: getVisibleTodos(state.files, state.visibilityFilter),
  layout: state.layout,
  //snackbar: state.snackbar
})

export default connect(mapStateToProps)(Main);
import { connect } from 'react-redux'
import { deleteFile } from '../actions'
import GridLayout from '../components/GridLayout'
import { getVisibleTodos } from '../actions'

const mapStateToProps = state => ({
  files: getVisibleTodos(state.files, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  deleteFile: id => dispatch(deleteFile(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(GridLayout);
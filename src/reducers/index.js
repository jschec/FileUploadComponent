import { combineReducers } from 'redux';
import files from './files';
import layout from './layout';
import snackbar from './snackbar';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
  files,
  layout,
  snackbar,
  visibilityFilter
})
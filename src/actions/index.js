let nextFileId = 0

export const addFile = file => ({
  type: 'ADD_FILE',
  id: nextFileId++,
  file
})

export const deleteFile = id => ({
  type: 'DELETE_FILE',
  id
})

export const deleteFiles = () => ({
  type: 'DELETE_FILES'
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const setLayout = layout => ({
  type: 'SET_LAYOUT',
  layout
})

export const toggleFile = id => ({
  type: 'TOGGLE_FILE',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_UPLOADED: 'SHOW_UPLOADED',
  SHOW_NOT_UPLOADED: 'SHOW_NOT_UPLOADED'
}

export const getVisibleTodos = (files, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return files
    case VisibilityFilters.SHOW_UPLOADED:
      return files.filter(f => f.uploaded)
    case VisibilityFilters.SHOW_NOT_UPLOADED:
      return files.filter(f => !f.uploaded)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

export const Layouts = {
  GRID: 'GRID',
  LIST: 'LIST',
}

export const snackbarConfig = {
  open: false,
  hideTimer: 3000,
  alertType: 'warning',
  message: ''
}

export const showSnackbar = (alertType, message) => ({
  type: "SNACKBAR_SHOW", 
  alertType,
  message
});

export const hideSnackbar = () => ({
  type: 'SNACKBAR_HIDE'
});
  
const files = (state = [], action) => {
    switch (action.type) {
      case 'ADD_FILE':
        return [
          ...state,
          {
            id: action.id,
            file: action.file,
            uploaded: false
          }
        ]
      case 'DELETE_FILE':
        return state.filter( file => 
          file.id !== action.id
        )
      case 'DELETE_FILES':
        return []
      case 'TOGGLE_FILE':
        return state.map(file =>
          file.id === action.id ? { ...file, uploaded: !file.uploaded } : file
        )
      default:
        return state
    }
  }
  
  export default files;
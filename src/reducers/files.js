import { uploadFiles } from '../utilities/UploadFile';

const files = (state = [], action) => {
    switch (action.type) {
      case 'ADD_FILE':
        return [
          ...state,
          {
            id: action.id,
            file: action.file,
            uploaded: false,
            uploading: false,
            uploadPercentage: 0
          }
        ]
      case 'DELETE_FILE':
        return state.filter( file => 
          file.id !== action.id
        )
      case 'DELETE_FILES':
        return []
      case 'UPLOADING_FILE':
        return state.map(file =>
          file.id === action.id ? 
          {
            ...file,
            uploading: !file.uploading
            //uploadPercentage: action.uploadPercentage 
          } : file
        )
      case 'UPLOADED_FILE':
        return state.map(file =>
          file.id === action.id ? 
          {
            ...file,
            uploaded: !file.uploaded
            //uploadPercentage: action.uploadPercentage 
          } : file
        )
      case 'UPDATE_FILE_UPLOAD_PROGRESS':
        return state.map(file =>
          file.id === action.id ? 
          {
            ...file,
            uploadPercentage: action.progress
            //uploadPercentage: action.uploadPercentage 
          } : file
        )  
      default:
        return state
    }
  }
  
  export default files;
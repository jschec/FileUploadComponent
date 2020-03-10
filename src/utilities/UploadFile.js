import axios from "axios";

export function uploadFiles(file) {
    const config = {
      headers: {'content-type': 'multipart/form-data'},
      onUploadProgress: function(progressEvent) {
        var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
        console.log("progess:", percentCompleted)
      }
    }
    var data = new FormData();
    data.append('file', file);
      
    axios.post('/AppFile', data, config)
      .then(res => console.log(res))
      .catch(err => console.log(err))
}
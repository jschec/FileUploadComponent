import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
//import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
//import AddIcon from '@material-ui/icons/Add';
import AppsIcon from '@material-ui/icons/Apps';
import ListIcon from '@material-ui/icons/List';
//import DeleteIcon from '@material-ui/icons/Delete';
import Divider from '@material-ui/core/Divider';
//import Tooltip from '@material-ui/core/Tooltip';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import axios from "axios";
//import {uploadFiles } from '../utilities/UploadFile';
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
        padding: 5,
        //paddingBottom: 20
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    input: {
      display: 'none',
    },
    buttonToggle: {
      marginRight: 20
    },
    grid: {
        //backgroundColor: 'rgba(0,0,0,.10)',
        //borderBottomStyle: 'solid',
        //borderBottomWidth: '1px'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    margin: {
        margin: theme.spacing(1),
    },
    inputFileUpload: {
      display: 'none'
    }
  }),
);

const Toolbar = ({ showSnackbar, files, addFile, uploadingFile, 
  uploadedFile, updateFileUploadProgress, deleteFiles, visibilityFilter, 
  setVisibilityFilter, layout, 
  setLayout }) => {
  const classes = useStyles();
  let selectedFiles = [];

  const handleChange = (e) => {
    let transferedFiles = [...e.target.files];
    if (transferedFiles && transferedFiles.length > 0) {

      const existingFiles = files.map(f => f.file.name);
      const newFiles = transferedFiles.filter(f => !existingFiles.includes(f.name));
      if (newFiles.length !== transferedFiles.length) {
        showSnackbar("warning", "Already transfered");
      };
      for (let newFile of newFiles) {
        addFile(newFile);
      }
      //this.setState({files: joinedFiles});
      //e.dataTransfer.clearData();
    }
  }

  const uploadFile = fileToUpload => {
    uploadingFile(fileToUpload.id);

    const config = {
      headers: {'content-type': 'multipart/form-data'},
      onUploadProgress: function(progressEvent) {
        var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
        updateFileUploadProgress(fileToUpload.id, percentCompleted);
        console.log("progess:", percentCompleted)
      }
    }
    var data = new FormData();
    console.log('fileToUpload', fileToUpload);
    data.append('file', fileToUpload.file);
              
    axios.post('/AppFile', data, config)
      .then(res => {
        uploadingFile(fileToUpload.id);
        uploadedFile(fileToUpload.id);
        console.log('uploaded file', fileToUpload.name);
        console.log(res);
      })
      .catch(err => console.log(err))
  }

  const handleUpload = (e) => {
    for (let file of files) {
      uploadFile(file);
    }
  }

  return (
    <div className={classes.root}>
      <Grid className={classes.grid} container spacing={1}>
        <Grid item container xs={6} direction="row" justify="flex-start" alignItems="center">
          <input 
            multiple 
            className={classes.input} 
            id="icon-button-file" 
            type="file" 
            value={selectedFiles} 
            onChange={e => handleChange(e)}
            onClick={(event)=> { 
              event.target.value = null
            }}/>
          <label htmlFor="icon-button-file">
            <Button variant="contained" color="primary" component="span">
              ADD
            </Button>
          </label>
          <Button 
            variant="contained" 
            color="primary" 
            component="span" 
            onClick={(e)=> deleteFiles()}>
              Clear
          </Button>
          <Button 
            variant="contained" 
            color="primary" 
            component="span" 
            onClick={(e)=> handleUpload()}>
              Upload
          </Button>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Show</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={visibilityFilter}
                onChange={(e) => setVisibilityFilter(e.target.value)}
              >
              <MenuItem value={"SHOW_ALL"}>All</MenuItem>
              <MenuItem value={"SHOW_UPLOADED"}>Uploaded</MenuItem>
              <MenuItem value={"SHOW_NOT_UPLOADED"}>Not Uploaded</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {/* Should this be item and container or just one of those tags */}
        <Grid item container xs={6} direction="row" justify="flex-end" alignItems="center">
          <ToggleButtonGroup
            value={layout}
            exclusive
            onChange={ (e, v) => setLayout(v)}
            aria-label="view"
            className={classes.buttonToggle}
          >
            <ToggleButton value="GRID" aria-label="grid-view">
              <AppsIcon/>
            </ToggleButton>
            <ToggleButton value="LIST" aria-label="list-view">
              <ListIcon/>
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
      </Grid>
      <Divider/>
    </div>
  )
}

export default Toolbar;
import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import ToolbarWrapped from '../containers/ToolbarWrapped';
import { withStyles } from '@material-ui/styles';
import VisibleListItems from '../containers/VisibleListItems';
import VisibleGridItems from '../containers/VisibleGridItems';
import SnackbarAppAlert from '../containers/SnackbarAppAlert';
import { addFile, showSnackbar } from '../actions';
import PropTypes from 'prop-types';

const styles = ({
    root: {
      flexGrow: 1,
    },
    paper: {
      textAlign: 'center',
    },
    contentContainer: {
      position: 'relative',
      minHeight: "300px",
      overflowY: "scroll",
      maxHeight: "400px",
      padding: "5px"
    }
});

class Main extends Component {
  dragCounter = 0;

  constructor(props) {
    super(props);
    this.handleDrop = this.handleDrop.bind(this);
    this.state = {
      inDropZone: false,
    }
  }

  handleDragOver = (e) => {
    e.preventDefault();
  }

  handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.dragCounter--;
    if (this.state.inDropZone && this.dragCounter === 0) {
      this.setState({inDropZone: false});
    }
  }

  handleDragEnter = (e) => {
    if (!this.state.inDropZone && this.dragCounter === 0) {
      this.setState({inDropZone: true});
    }
    this.dragCounter++;
  }

  handleDrop = (e, files) => {
    e.preventDefault();
    e.stopPropagation();
    let transferedFiles = [...e.dataTransfer.files];
    if (transferedFiles && transferedFiles.length > 0) {

      const existingFiles = files.map(f => f.file.name);
      console.log('existingFiles', existingFiles);
      const newFiles = transferedFiles.filter(f => !existingFiles.includes(f.name));
      console.log('props', this.props);
      if (newFiles.length !== transferedFiles.length) {
        console.log('snackbar dispatch');
        this.props.dispatch(showSnackbar("warning", "Already transfered"));
      };
      for (let newFile of newFiles) {        
        this.props.dispatch(addFile(newFile));
      }
      e.dataTransfer.clearData();
    }
    this.setState({inDropZone: false});
    this.dragCounter = 0;
  }

  render() {
    const { classes } = this.props;
    const inDropZone = this.state.inDropZone;
    const { files, layout } = this.props;
    let view;

    let inputStyle = {
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      zIndex: '-1',
      margin: 5,
      border: '1px dashed',
      backgroundColor: '#dfdfdf',
      position: 'absolute',
    };

    if (inDropZone) {
      inputStyle.zIndex = 1000;
      inputStyle.border = '1px dashed blue';
    } else if (files.length === 0) {
      inputStyle.zIndex = 1000;
    }

    if (layout === 'GRID') {
      view = <VisibleGridItems/>
    } else if (layout === 'LIST') {
      view = <VisibleListItems/>
    }

    return (
      <div 
        className={classes.root} 
        onDragOver={e => e.preventDefault()}
        onDragEnter={e => this.handleDragEnter(e)}
        onDragLeave={e => this.handleDragLeave(e)}
        onDrop={e => this.handleDrop(e, files)}
      >
        <Paper className={classes.paperContent} elevation={3} square>
          <ToolbarWrapped/>
          <div className={classes.contentContainer}>
            <div style={inputStyle}>
              Upload files here
            </div>           
            {view}
          </div>
        </Paper>
        <SnackbarAppAlert/>
      </div>
    );
  }
}

Main.propTypes = {
  files: PropTypes.array.isRequired,
  layout: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
}

export default withStyles(styles)(Main);
import React, { Component, createRef } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ImageContainer from './ImageContainer';
import Toolbar from './Toolbar';
import DropOverlay from './DropOverlay';
import { withStyles } from '@material-ui/styles';

//theme: Theme
const styles = theme => ({
    root: {
      flexGrow: 1,
      //borderStyle: 'solid',
      //borderWidth: '1px',
      //backgroundColor: 'rgba(0,0,0,.10)'
    },
    content: {
      padding: 10
    },
    paper: {
      //padding: theme.spacing(2),
      textAlign: 'center',
      //color: theme.palette.text.secondary,
    },
    imageContainer: {
      minHeight: "300px",
      maxHeight: "500px",
      overflowY: "scroll"
    }
});

class GridLayout extends Component {
  resizeObserver = null;
  resizeElement = createRef();

  constructor(props) {
    super(props);
    this.state = {
      inDropZone: false,
      overlayHeight: 0,
      overlayWidth: 0,
      files: []
    }
  }

  componentDidMount() {
    this.resizeObserver = new ResizeObserver((entries) => {
      if (entries[0].contentRect) {
        this.setState({
          overlayWidth: entries[0].contentRect.width, 
          overlayHeight: entries[0].contentRect.height
        });
      }
     
    });
    this.resizeObserver.observe(this.resizeElement.current);
  }

  componentWillUnmount() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }

  handleDragOver = (e) => {
    //console.log("dragOver");
  }

  handleDragExit = (e) => {
    console.log("handleDragExit");
  }

  handleDragLeave = (e) => {
    /*
    console.log('handleDragLeave')
    
    if (this.state.inDropZone == true) {
      this.setState({inDropZone: false});
    }
    */
  }

  handleDragEnter = (e) => {
    if (this.state.inDropZone == false) {
      this.setState({inDropZone: true});
    }
  }

  handleDrop = (e) => {
    console.log('handleDrop');
    e.preventDefault();
    e.stopPropagation();

    let transferedFiles = [...e.dataTransfer.files];
    console.log('files', transferedFiles);
    if (transferedFiles && transferedFiles.length > 0) {
      const existingFiles = this.state.files.map(f => f.name)
      //should output existing files to snackbar
      transferedFiles = transferedFiles.filter(f => !existingFiles.includes(f.name));
      let joinedFiles = this.state.files.concat(transferedFiles);
      this.setState({files: joinedFiles});
      e.dataTransfer.clearData();
      this.setState({inDropZone: false});
    }
  }

  handleDelete(nameToDelete) {
    console.log("handleDelete", nameToDelete);
    let notDeletedFiles = this.state.files.filter(f => nameToDelete !== f.name);
    this.setState({files: notDeletedFiles});
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Paper elevation={3} square 
          onDragOver={e => e.preventDefault()}
          onDragEnter={e => this.handleDragEnter(e)}
          onDragExit={e => this.handleDragExit(e)}
          onDragLeave={e => this.handleDragLeave(e)}
          onDrop={e => this.handleDrop(e)}
          ref={this.resizeElement}
        >
          <Toolbar/>

          {this.state.inDropZone &&
            <DropOverlay width={this.state.overlayWidth} height={this.state.overlayHeight}/>
          }

          <Grid className={classes.imageContainer} container spacing={1}>
            {this.state.files.map( (file,index) => (
              <Grid item md={2} sm={2} key={file.name}>
                <ImageContainer delete={this.handleDelete.bind(this)} title={file.name} size={file.size} id={index}/>
              </Grid>
            ))}
          </Grid>

        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(GridLayout);
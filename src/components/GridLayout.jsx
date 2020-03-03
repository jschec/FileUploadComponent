import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ImageContainer from './ImageContainer';
import Toolbar from './Toolbar';
import DropZone from './DropZone';
import DropOverlay from './DropOverlay';
//<Dropzone

//theme: Theme
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1
      //borderStyle: 'solid',
      //borderWidth: '1px',
      //backgroundColor: 'rgba(0,0,0,.10)'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    imageContainer: {
      maxHeight: "500px",
      overflowY: "scroll"
    }
  }),
);

const DropWindow = ({show}) =>
  <div style={{visibility: show? "visible" : "hidden", backgroundColor: "blue", position: "absolute", height: "200px", width: "300px", zIndex: 100}}>
    {"UPLOAD FILE HERE"}
  </div>


export default function GridLayout() {
  var isDragging = false;
  //how to check if files are present? Should we just check array list length?

  //use this to switch between grid and list layouts
  //const [drag, setDrag] = useState(false);
  const [layout, setLayout] = useState('');

  const handleDragOver = (e) => {
    //console.log("dragOver");
  }

  const handleDragExit = (e) => {
    isDragging = false;
    console.log("handleLeave");
  }

  const handleDragEnter = (e) => {
    isDragging = true;
    console.log("dragEnter", isDragging);
  }

  const handleDrop = (e) => {
    //console.log("drop");
  }


  const classes = useStyles();
  const images = [
    { title: 'something.docx', size: 100 },
    { title: 'something1.xlsx', size: 100 },
    { title: 'item232.text', size: 312 },
    { title: 'something12323.docx', size: 301 },
    { title: 'something.docx', size: 100 },
    { title: 'something1.xlsx', size: 100 },
    { title: 'item232.text', size: 312 },
    { title: 'something12323.docx', size: 301 },
    //{ title: 'something.docx', size: 100 },
    //{ title: 'something1.xlsx', size: 100 },
    //{ title: 'item232.text', size: 312 },
    //{ title: 'something12323.docx', size: 301 },
  ]
  
 


  return (
    <div className={classes.root}>
      <Paper elevation={3} square 
        onDragOver={e => handleDragOver(e)}
        onDragEnter={e => handleDragEnter(e)}
        onDragExit={e => handleDragExit(e)}
        onDrop={e => handleDrop(e)}
      >
        <Toolbar/>
        {isDragging &&
          <DropOverlay/>
        }
        <Grid className={classes.imageContainer} container spacing={1}>
          {images.map( image => (
            <Grid item md={4} sm={4}>
              <ImageContainer title={image.title} size={image.size}/>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </div>
  );
}
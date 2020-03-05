import React, {useState, useEffect} from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      zIndex: 100,
      //flexGrow: 1,
      //backgroundColor: "grey",
      position: "absolute",
      //height: "100%",
      //width: "100%",
      //zIndex: 10,
      //borderStyle: 'solid',
      //borderWidth: '1px',
      backgroundColor: 'rgba(0,0,0,.10)'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);


export default function DropOverlay(props) {
    const classes = useStyles();
  
    
    return(
        <div style={{height: props.height - 200, 
          width: props.width, backgroundColor: 'grey',
          position: 'absolute', zIndex: 100, border: '4px dashed black'}}>
            {"Upload here!!!!"}
        </div>
    )

}
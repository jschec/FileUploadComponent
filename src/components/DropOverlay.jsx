import React, {useState, useEffect} from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    nestedContainer: {
      padding: 5,
      border: '4px dashed black',
      backGroundColor: 'grey', //theme.palette.text.secondary,
      //zIndex: 101
    },
  }),
);


export default function DropOverlay(props) {
    const classes = useStyles();
  
    
    return(
        <div style={{height: props.height - 200, 
          width: props.width,
          position: 'absolute', zIndex: 100}}>
            <div className={classes.nestedContainer}>
              {"Upload here!!!!"}
            </div>
        </div>
    )

}
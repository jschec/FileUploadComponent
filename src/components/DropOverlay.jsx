import React, {useState, useEffect} from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: "blue",
      position: "absolute",
      height: "100%",
      width: "100%"
      //borderStyle: 'solid',
      //borderWidth: '1px',
      //backgroundColor: 'rgba(0,0,0,.10)'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);


export default function DropOverlay(props) {
    console.log("initalized", props);
    //const [show, setShow] = useState(false);
    const classes = useStyles();
    /*
    useEffect(() => {
        console.log("props", props);

        if(show != props.hide) {
            console.log("state change");
            setShow(props.hide);
        }
    });
    */
    
    return(
        <div className={classes.root}>
            {"Upload here!!!!"}
        </div>
    )

}
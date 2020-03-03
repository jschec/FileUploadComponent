import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        padding: 5,
        paddingBottom: 20
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
    }
  }),
);

export default function Toolbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid className={classes.grid} container spacing={1}>
        <IconButton aria-label="delete" className={classes.margin}>
          <AddIcon /> {/*fontSize="small"*/}
        </IconButton>
        <IconButton aria-label="delete" className={classes.margin}>
          <DeleteIcon />
        </IconButton>
      </Grid>
      <Divider/>
    </div>
  );
}
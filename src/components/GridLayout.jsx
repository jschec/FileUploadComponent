import React from 'react';
import Grid from '@material-ui/core/Grid';
import GridItem from './GridFileItem';
import PropTypes from 'prop-types';


//import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
/*
const useStyles = makeStyles((theme) =>
  createStyles({
    gridLayout: {
        overflowY: "scroll",
        maxHeight: "300px",
    }
  })
);

const classes = useStyles();
*/
const GridLayoutNew = ({ files, deleteFile }) => (
    //className={classes.gridLayout} 
    <Grid container spacing={1}>
        {files.map( (file) =>
            <GridItem
                key={file.id}
                {...file} 
                onClick={() => deleteFile(file.id)}
            />
        )}
    </Grid>
)

GridLayoutNew.propTypes = {
  files: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      file: PropTypes.shape({
        name: PropTypes.string.isRequired,
        lastModified: PropTypes.number.isRequired,
        lastModifiedDate: PropTypes.instanceOf(Date).isRequired,
        webkitRelativePath: PropTypes.string.isRequired,
        size: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired
      }).isRequired,
      uploaded: PropTypes.bool.isRequired,
      uploading: PropTypes.bool.isRequired,
      uploadPercentage: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
  deleteFile: PropTypes.func.isRequired
}

export default GridLayoutNew;
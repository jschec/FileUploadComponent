import React from 'react';
import styled from '@emotion/styled/macro';
import Grid from '@material-ui/core/Grid';
import IconButton  from '@material-ui/core/IconButton';
import {DeleteForever, CloudDownload } from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
//import Skeleton from '@material-ui/lab/Skeleton';
import { formatBytes } from '../utilities/formatBytes';
import PropTypes from 'prop-types';
import GridItemItem from './GridItemItem';

const Hover = styled.div({
    opacity: 0,
    transition: "opacity 350ms ease",
});
  
const DisplayOver = styled.div({
    height: "100%",
    left: "0",
    position: "absolute",
    top: "0",
    width: "100%",
    zIndex: 2,
    transition: "background-color 350ms ease",
    backgroundColor: "transparent",
    padding: "20px 20px 0 20px",
    boxSizing: "border-box",
});
  
const Background = styled.div({
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    color: "#FFF",
    position: "relative",
    width: "100px",
    height: "100px",
    cursor: "pointer",
    backgroundImage: "url(/generic_file.png)",
    [`:hover ${DisplayOver}`]: {
      backgroundColor: "rgba(0,0,0,.5)",
    },
    [`:hover ${Hover}`]: {
      opacity: 1,
    },
});



const GridItem = ({ onClick, id, file, uploaded }) => (
    <Grid item container lg={2} md={2} sm={6} spacing={1}>
        <Grid container direction="row" justify="center" alignItems="center">
            <GridItemItem file={file} delete={onClick.bind(this)}></GridItemItem>
            {/**
            <Background>
                <DisplayOver>
                    <Hover>
                        <Grid container spacing={3}>
                            <Grid item xs={6}>
                                <IconButton  size="small" color="primary" aria-label="add">
                                    <CloudDownload fontSize={'small'}/>
                                </IconButton >
                            </Grid>
                            <Grid item xs={6}>
                                <IconButton  size="small" color="primary" aria-label="edit">
                                    <DeleteForever fontSize={'small'} onClick={onClick}/>
                                </IconButton >
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="caption">{formatBytes(file.size)}</Typography>
                            </Grid>
                        </Grid>
                    </Hover>
                </DisplayOver>
            </Background>
            */}
        </Grid>
    </Grid>
)

GridItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  file: PropTypes.shape({
    name: PropTypes.string.isRequired,
    lastModified: PropTypes.number.isRequired,
    //what is appropriate type for date?
    lastModifiedDate: PropTypes.instanceOf(Date).isRequired,
    webkitRelativePath: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired
  }).isRequired,
  uploaded: PropTypes.bool.isRequired
}

export default GridItem;
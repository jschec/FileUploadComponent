import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled/macro';
import Grid from '@material-ui/core/Grid';
//import LinearProgress from '@material-ui/core/LinearProgress';
import { formatBytes } from '../utilities/formatBytes';
import PropTypes from 'prop-types';
//import GridItemItem from './GridItemItem';
import IconButton  from '@material-ui/core/IconButton';
import {DeleteForever, CloudDownload } from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';

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

function GridFileItem(props) {
    const [renderDelay, setRenderDelay] = useState(true);

    useEffect(() => {
        const delay = setTimeout(() => setRenderDelay(false), 2000);
        return () => clearTimeout(delay);
    }, []);
    

    let fileSize = formatBytes(props.file.size, 2);
    let fileName = props.file.name;
    let fileContainer;

    if (renderDelay) {
        fileContainer = 
        <Grid container direction="column">
            <Grid item xs={12}>
                <Skeleton variant="rect" width={100} height={100} />
            </Grid>
            <Grid item xs={12}>
                <Skeleton variant="text"/>
            </Grid>
        </Grid>
    } else {
        fileContainer = 
        <Grid container direction="column">
            <Grid container direction="row" justify="center" alignItems="center">
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
                                        {/*onClick={e => onClickDelete(e)}*/}
                                        <DeleteForever fontSize={'small'} onClick={() => props.onClick()}/>
                                    </IconButton>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="caption">{fileSize}</Typography>
                                </Grid>
                            </Grid>
                        </Hover>
                    </DisplayOver>
                </Background>
            </Grid>
            <Grid item xs={12} style={{overflow: "hidden", textOverflow: "ellipsis", width: '10rem'}}>
                <Typography noWrap variant="caption" gutterBottom>{fileName}</Typography>
            </Grid>
        </Grid>
    }
    
    return(
        <Grid item container lg={2} md={2} sm={6} spacing={1}>
            <Grid container direction="row" justify="center" alignItems="center">
            {fileContainer}
            </Grid>
        </Grid>
    )
}

export default GridFileItem;

/*
const GridItem = ({ onClick, id, file, uploaded }) => (
    <Grid item container lg={2} md={2} sm={6} spacing={1}>
        <Grid container direction="row" justify="center" alignItems="center">
            <GridItemItem file={file} delete={onClick.bind(this)}></GridItemItem>
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
  uploaded: PropTypes.bool.isRequired,
  uploadPercentage: PropTypes.number.isRequired
}

export default GridItem;
*/
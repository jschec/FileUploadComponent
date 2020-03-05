import React, { useState } from 'react';
import styled from '@emotion/styled/macro';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import {DeleteForever, CloudDownload } from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';

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
    width: "200px",
    height: "200px",
    cursor: "pointer",
    backgroundImage: "url(/generic_file.png)",
    [`:hover ${DisplayOver}`]: {
      backgroundColor: "rgba(0,0,0,.5)",
    },
    [`:hover ${Hover}`]: {
      opacity: 1,
    },
});
  
function ImageContainer(props: any) {
    
    function formatBytes(bytes: number, decimals: number) {
        if(bytes == 0) return '0 Bytes';
        var k = 1024,
            dm = decimals <= 0 ? 0 : decimals || 2,
            sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
            i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

    let size = formatBytes(props.size, 2);
    let name = props.title;
    
    return(
        <Grid container spacing={1}>
            <Grid container direction="row" justify="center" alignItems="center">
                <Background>
                    <DisplayOver>
                        <Hover>
                            <Grid container spacing={10}>
                                <Grid item xs={6}>
                                    <Fab size="small" color="primary" aria-label="add">
                                        <CloudDownload/>
                                    </Fab>
                                </Grid>
                                <Grid item xs={6}>
                                    <Fab size="small" color="primary" aria-label="edit">
                                        {/*onClick={e => onClickDelete(e)}*/}
                                        <DeleteForever onClick={() => {props.delete(name)}}/>
                                    </Fab>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h6">{size}</Typography>
                                </Grid>
                            </Grid>
                        </Hover>
                    </DisplayOver>
                </Background>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="subtitle1" gutterBottom>{name}</Typography>
            </Grid>
        </Grid>
    )
}

export default ImageContainer;
import React, { useState } from 'react';
import styled from '@emotion/styled/macro';
import Grid from '@material-ui/core/Grid';
//import { connect } from 'react-redux';
import Fab from '@material-ui/core/Fab';
import {DeleteForever, CloudDownload } from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';


interface IfcState {
    size: number;
    title: String;
    image: string;
    width: number;
    hight: number;
}

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
    width: "300px",
    height: "200px",
    cursor: "pointer",
    backgroundImage: "url(/bg.jpg)",
    [`:hover ${DisplayOver}`]: {
      backgroundColor: "rgba(0,0,0,.5)",
    },
    [`:hover ${Hover}`]: {
      opacity: 1,
    },
});
  
function ImageContainer(props: any) {

    const [size, setSize] = useState(props.size);
    const [title, setTitle] = useState(props.title);
    const [image, setImage] = useState(0);

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
                                        <DeleteForever />
                                    </Fab>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h6">{size} KB</Typography>
                                </Grid>
                            </Grid>
                        </Hover>
                    </DisplayOver>
                </Background>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="subtitle1" gutterBottom>{title}</Typography>
            </Grid>
        </Grid>
    )
}

export default ImageContainer;
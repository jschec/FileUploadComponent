import React, { useEffect, useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import Badge from '@material-ui/core/Badge';
import PropTypes from 'prop-types';
import Skeleton from '@material-ui/lab/Skeleton';
import { formatBytes } from '../utilities/formatBytes';
import Grid from '@material-ui/core/Grid';

function ListGhost(props) {
    const [renderDelay, setRenderDelay] = useState(true);

    useEffect(() => {
        const delay = setTimeout(() => setRenderDelay(false), 2000);
        return () => clearTimeout(delay);
    }, []);
    
    let fileUploaded = props.uploaded;
    let fileSize = formatBytes(props.file.size, 2);
    let fileName = props.file.name;
    let fileContainer;

    if (renderDelay) {
        fileContainer = 
        <ListItem button>
            <ListItemAvatar>
                <Skeleton variant="square" width={50} height={50} />
            </ListItemAvatar>
            <Grid container direction="column">
                <Grid item xs={12}>
                    <Skeleton variant="text" width={200} />
                </Grid>
                <Grid item xs={12}>
                    <Skeleton variant="text" width={100} />
                </Grid>
            </Grid>
            <ListItemSecondaryAction>
                {/* spacing={#} does not work here */}
                <Grid container direction="row">
                    <Skeleton variant="circle" width={25} height={25} />
                    <Skeleton variant="circle" width={25} height={25} />
                </Grid>
            </ListItemSecondaryAction>
        </ListItem>
        
    } else {
        fileContainer = 
        <ListItem button>
            <ListItemAvatar>
            {fileUploaded ?
                (
                    <Badge color="secondary" badgeContent=" " overlap="rectangle">
                        <img src="/generic_file.png" style={{height: 50, width: 50}}/>
                    </Badge>
                )
                :
                (
                    <img src="/generic_file.png" style={{height: 50, width: 50}}/>
                )
            }
            </ListItemAvatar>
            <ListItemText
                primary={fileName}
                secondary={fileSize}
            />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                    <CloudDownloadIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete">
                    <DeleteIcon onClick={() => props.delete()}/>
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    }
    
    return(
        <div>
            {fileContainer}
        </div>
    )
}

export default ListGhost;
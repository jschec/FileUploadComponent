import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import Badge from '@material-ui/core/Badge';
import PropTypes from 'prop-types';
import { formatBytes } from "../utilities/formatBytes";
import ListGhost from './ListGhost';

const ListFileItem = ({ onClick, id, file, uploaded }) => (
    <ListGhost file={file} uploaded={uploaded} delete={onClick.bind(this)}/>
    /*
    <ListItem button>
        <ListItemAvatar>
        {uploaded ?
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
            primary={file.name}
            secondary={formatBytes(file.size)}
        />
        <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
                <CloudDownloadIcon />
            </IconButton>
            <IconButton edge="end" aria-label="delete">
                <DeleteIcon onClick={onClick}/>
            </IconButton>
        </ListItemSecondaryAction>
    </ListItem>
    */
)

ListFileItem.propTypes = {
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

export default ListFileItem;
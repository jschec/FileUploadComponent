import React from 'react';
import List from '@material-ui/core/List';
import ListFileItem from './ListFileItem';
import PropTypes from 'prop-types';
//import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
/*
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fileLayout: {
        overflowY: "scroll",
        maxHeight: "300px",
    }
  })
);
*/

const ListLayout = ({ files, deleteFile }) => (
    <List dense={true}>
        {files.map( (file) =>
            <ListFileItem
                key={file.id}
                {...file} 
                onClick={() => deleteFile(file.id)}
            />
        )}
    </List>
)

ListLayout.propTypes = {
  files: PropTypes.arrayOf(
    PropTypes.shape({
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
    }).isRequired
  ).isRequired,
  deleteFile: PropTypes.func.isRequired
}

export default ListLayout;
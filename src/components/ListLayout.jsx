import React from 'react';
import List from '@material-ui/core/List';
import ListFileItem from './ListFileItem';
import PropTypes from 'prop-types';

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

export default ListLayout;
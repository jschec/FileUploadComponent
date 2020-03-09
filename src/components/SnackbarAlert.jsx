import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import PropTypes from 'prop-types';

const SnackbarAlert = ({ snackbar, handleClose }) => (
    <Snackbar open={snackbar.open} autoHideDuration={snackbar.hideTimer} onClose={() => handleClose()}>
        <Alert onClose={() => handleClose()} severity={snackbar.alertType}>
            {snackbar.message}
        </Alert>
    </Snackbar>
)

SnackbarAlert.propTypes = {
    snackbar: PropTypes.objectOf({
        open: PropTypes.bool.isRequired,
        hideTimer: PropTypes.number.isRequired,
        alertType: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired
    }),
    handleClose: PropTypes.func.isRequired
}

export default SnackbarAlert;
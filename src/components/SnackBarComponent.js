import React, {forwardRef} from 'react';
import SnackBar from '@material-ui/core/Snackbar';

const SnackBarComponent = forwardRef((props,ref) => {
    // toast hook
    console.log("hello");
    
    function handleClose(event,reason){
        if (reason === 'clickaway') {
            return;
          }
    }
    
    return(
        <SnackBar
        ref = {ref}
        open={props.openToast}
        anchorOrigin={{
            vertical:"top",
            horizontal:"right",
        }}
        onClose={handleClose}
        message={props.snackbar_msg}
        autoHideDuration = {3000}
        />
    );
});

export default SnackBarComponent;
import React, { forwardRef } from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';

const IconButtonComponent = forwardRef( (props,ref) =>{
    
    return(
    <IconButton 
            id="task-add-button"
            ref = {ref}
            variant="outlined" 
            size={props.button_size}
            onClick={props.button_click}
            >
            {(props.icon==="done")?<DoneIcon />:<DeleteIcon />}
    </IconButton>
    );
});
export default IconButtonComponent; 
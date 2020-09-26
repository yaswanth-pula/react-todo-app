import React, { forwardRef } from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import Tooltip from '@material-ui/core/Tooltip';
import ClearIcon from '@material-ui/icons/Clear';
const IconButtonComponent = forwardRef( (props,ref) =>{
    function handleButtonType(text){
        if(text==="done")
            return < DoneIcon />;
        if(text==="not_done")
            return < ClearIcon />
        if(text==="delete")
            return < DeleteIcon />
    }
    return(
        <Tooltip ref = {ref} title={props.tip_text} aria-label={props.tip_text}>
            <IconButton 
                    id="task-add-button"
                    ref = {ref}
                    variant="outlined" 
                    size={props.button_size}
                    onClick={props.button_click}
                    >
                    {
                       handleButtonType(props.icon)
                    }
            </IconButton>
        </Tooltip>  
    );
});
export default IconButtonComponent; 
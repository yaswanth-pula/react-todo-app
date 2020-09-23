import React, { forwardRef } from 'react';
import Button from '@material-ui/core/Button';

const ButtonComponent = forwardRef( (props,ref) =>{
    return(
    <Button 
            id="task-add-button"
            ref = {ref}
            variant="outlined" 
            color="primary"
            size={props.button_size}
            onClick={props.button_click}
            >
            {props.label}
    </Button>
    );
});
export default ButtonComponent; 
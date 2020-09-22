import React, { forwardRef } from 'react';
import Button from '@material-ui/core/Button';
const ButtonComponent = forwardRef( (props,ref) =>{
    return(
    <Button 
            ref = {ref}
            variant="outlined" 
            color="primary"
            onClick={props.button_click}>
            {props.button_text}
    </Button>
    );
});
export default ButtonComponent; 
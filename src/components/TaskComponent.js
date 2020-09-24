import Typography from '@material-ui/core/Typography';
import React from 'react';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import IconButtonComponent from './IconButtonComponent';
// import {updateToDoListFromStorage} from '../logic/LocalStore';
const TaskComponent = (props) => {
    // function handleCompletedTask(){
    //     updateToDoListFromStorage(props.id);
    // }

    return(
        <div>
        <Paper id="task-input-paper">
            <Chip variant="outlined" label={props.status} id="chip"/>
            <Typography variant="overline" align="center">
                {props.task}
            </Typography>
            <IconButtonComponent icon = "done" button_size="small" />
            <IconButtonComponent icon = "delete" button_size="small" />
        </Paper>
        </div>
    );
}

export default TaskComponent;
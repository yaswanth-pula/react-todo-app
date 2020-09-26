import Typography from '@material-ui/core/Typography';
import React, { forwardRef } from 'react';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import IconButtonComponent from './IconButtonComponent';
import { updateToDoListFromStorage, deletedTaskFromStorage } from '../logic/LocalStore';

const TaskComponent = forwardRef((props,task_ref) => {
    // custom style
    function handleCompletedTask(){
        updateToDoListFromStorage(props.id);
        props.call_back(Date.now);
    }
    function handleDeleteTask(){
        deletedTaskFromStorage(props.id);
        props.call_back(Date.now);
    }
    function handleTodoStatus(){
        return props.task_status?("Task Complete"):("Task Incomplete");
    }
    return(
        <div>
        <Paper className='task-item-paper'>
            <Chip variant="outlined" label={handleTodoStatus()} id="chip"/>
                <Typography variant="inherit" align="justify" id={props.task_status?"completed-task":"task-text"}>
                    {props.task}
                </Typography>
                { 
                    props.task_status?
                    <IconButtonComponent ref = {task_ref} button_click ={handleCompletedTask} icon = "not_done" button_size="small" tip_text="Not Completed"/>
                    :<IconButtonComponent ref = {task_ref} button_click ={handleCompletedTask} icon = "done" button_size="small" tip_text=" Task Completed"/>
                }
            <IconButtonComponent ref = {task_ref} button_click = {handleDeleteTask} icon = "delete" button_size="small" tip_text="Delete Task" />
        </Paper>
        </div>
    );
});

export default TaskComponent;
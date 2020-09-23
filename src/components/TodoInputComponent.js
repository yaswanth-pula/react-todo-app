import React, { createRef, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import ButtonComponent from './ButtonComponent'
import Paper from '@material-ui/core/Paper'

const TodoInputComponent = () => {
    // Ref
    const input_ref = createRef();

    const [TaskInputText,setTaskInputText] = useState("");
    function handleAddTask(){
        console.log(TaskInputText);
        setTaskInputText("");
    }
    return(
        <div>
            <Paper id="task-input-paper">
            <TextField
                inputRef = {input_ref} 
                id ="outlined-basic" 
                label="Enter Your Task" 
                variant="outlined"
                size = "small"
                onChange={(event) => {setTaskInputText(event.target.value)}}
                value={TaskInputText}
                multiline
                />
                 <ButtonComponent
                id="task-add-button" 
                ref={input_ref}
                button_size ="medium"
                label = "ADD TASK"
                button_click = {handleAddTask}
            />
        </Paper>
        </div>
    );

}

export default TodoInputComponent;
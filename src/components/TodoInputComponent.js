import React, { createRef, useState,useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import ButtonComponent from './ButtonComponent'
import Paper from '@material-ui/core/Paper'
import TaskComponent from '../components/TaskComponent';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import  addToDoStorage, {getToDoListFromStorage}  from '../logic/LocalStore';

const TodoInputComponent = () => {
    // Ref
    const input_ref = createRef();
    // hooks
    const [TaskInputText,setTaskInputText] = useState("");
    const [task_list,setTodolist] = useState([]);
    const [parent_render,setParentRender] = useState("");
    // useEffect
    useEffect(() =>{
            getTodo();
            showTodo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[TaskInputText,parent_render]);
    function addToDo(){
        addToDoStorage(TaskInputText);
    }
    function getTodo(){
        setTodolist(getToDoListFromStorage);
    }
    
    function handleAddTask(event){
        event.preventDefault();
        addToDo();
        showTodo();
        setTaskInputText("");
    }
    function handleCallback(val){
        setParentRender(val);
    }

    function showTodo(){ 
        return (
            <div>
            {task_list.map((todo) =>(
                <TaskComponent ref = {input_ref} task={todo.task_content} task_status ={todo.isTaskFinshed} key = {todo.id} id={todo.id} call_back={handleCallback} />
            ))
        }
        </div>
        );
    }
    
    return(
        <div className="task-input-div">
            <div className="task-input">
            <form onSubmit={handleAddTask}>
                <Paper id="task-input-paper">
                    <TextField
                        className="input_text_field"
                        inputRef = {input_ref} 
                        label="Enter Your Task" 
                        variant="outlined"
                        size="small"
                        onChange={(event) => {setTaskInputText(event.target.value)}}
                        value={TaskInputText}
                        fullWidth
                        />
                        <ButtonComponent
                        disabled={!TaskInputText}
                        id="task-add-button" 
                        ref={input_ref}
                        button_size ="medium"
                        label = "ADD TASK"
                        button_click = {handleAddTask}
                    />
                </Paper>
            </form>
            </div>
        
            <div className="task-list-view">
                <React.Fragment>
                <CssBaseline />
                    <Container maxWidth="md">
                        {showTodo()}
                    </Container>
                </React.Fragment>
                    
            </div>
        </div>
    );

}

export default TodoInputComponent;
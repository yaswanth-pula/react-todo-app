import React, { createRef, useState,useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import ButtonComponent from './ButtonComponent'
import Paper from '@material-ui/core/Paper'
import TaskComponent from '../components/TaskComponent';
import  addToDoStorage, {getToDoListFromStorage}  from '../logic/LocalStore';

const TodoInputComponent = () => {
    // Ref
    const input_ref = createRef();

    const [TaskInputText,setTaskInputText] = useState("");
    const [task_list,setTodolist] = useState([]);
    // useEffect
    useEffect(() =>{
            getTodo();
            showTodo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[TaskInputText]);
    function addToDo(){
        // let taskObj = {"id":Date.now(),"task_content":TaskInputText,"status":"completed"};
        // task_list.push(taskObj);
        // localStorage.setItem("LOCAL_KEY",JSON.stringify(task_list));
        addToDoStorage(TaskInputText);
    }
    function getTodo(){
        // (localStorage.getItem("LOCAL_KEY")===null)?
        //                 setTodolist([])
        //                 :setTodolist( JSON.parse(localStorage.getItem("LOCAL_KEY")) );
        setTodolist(getToDoListFromStorage);
    }
    
    function handleAddTask(event){
        event.preventDefault();
        addToDo();
        showTodo();
        setTaskInputText("");
    }    
    function showTodo(){ 
        return (
            <div>
            {task_list.map((todo) =>(
                <TaskComponent task={todo.task_content} status ={todo.status} key = {todo.id} id={todo.id}/>
            ))
        }
        </div>
        );
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
                disabled={!TaskInputText}
                id="task-add-button" 
                ref={input_ref}
                button_size ="medium"
                label = "ADD TASK"
                button_click = {handleAddTask}
            />
        </Paper>
            <div>
                {task_list.length!==0 && showTodo()}
            </div>
        </div>
    );

}

export default TodoInputComponent;
export default function addToStorage(content){
    let task_list = getToDoListFromStorage();
    let taskObj = {"id":Date.now(),"task_content":content,"isTaskFinshed":false};
    task_list.push(taskObj);
    //localStorage.setItem("LOCAL_KEY",JSON.stringify(task_list));
    updateLocalStore(task_list);
}
    
export function getToDoListFromStorage(){
let todo_list = [];
    if(localStorage.getItem("LOCAL_KEY")!==null)
            todo_list = (JSON.parse(localStorage.getItem("LOCAL_KEY")));
    
    return todo_list;
}

export function updateToDoListFromStorage(task_id){
    let current_todo_list = []; 
    current_todo_list = getToDoListFromStorage();
    current_todo_list = current_todo_list.map((task) =>{
        if(task_id === task.id){
            return{
                ...task,isTaskFinshed:(!task.isTaskFinshed)
            }
        }
        return task;       
    });
    //localStorage.setItem("LOCAL_KEY",JSON.stringify(current_todo_list));
    updateLocalStore(current_todo_list);
}

export function deletedTaskFromStorage(task_id){
    let current_todo_list = []; 
    current_todo_list = getToDoListFromStorage();
    current_todo_list = current_todo_list.filter((task) => task.id!==task_id);
    // localStorage.setItem("LOCAL_KEY",JSON.stringify(current_todo_list));
    updateLocalStore(current_todo_list);
}

function updateLocalStore(updatelist){
    localStorage.setItem("LOCAL_KEY",JSON.stringify(updatelist));
}
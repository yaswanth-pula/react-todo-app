export default class ToDoStructure{
     #id; 
     #task_content; 
     #isCompleted;
     
     constructor(){
         this.#id = Date.now();
     }

     get id(){
         return this.#id;
     }
     get task_content(){
         return this.#task_content;
     }
     get isCompleted(){
         return this.#isCompleted;
     }
     set task_content(task_content){
         this.#task_content = task_content;
     }
     set isCompleted(isCompleted){
         this.#isCompleted = isCompleted;
     }
} 
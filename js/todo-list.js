
const Status = ["TODO", "IN PROGRESS", "REVIEW", "DONE"];

class TaskManager {
    constructor (id){
        this.id = id;
        this.tasks = [];
    }
    
    addTask(Name, Description, AssignedTo, DueDate, Status){ 
        const task = {
            id : this.id++,
            Name : Name,
            Description : Description,
            AssignedTo : AssignedTo,
            DueDate : DueDate,
            Status : Status
            }
        this.tasks.push(task);        
    }

    ShowArray(){
        console.log(this.tasks)
    }
}

let NewTaskManager = new TaskManager(0)
 NewTaskManager.addTask("a","b","c","d","c")
 NewTaskManager.addTask("a","b","c","d","c")
 NewTaskManager.ShowArray()

// Array that stores task objects

// Use a (factory) function for the object creation

// Constructor
// Just a placeholder constructor that will do stuff (in the future)

getAllTasks()
// returns the list of all tasks

function getTasksWithStatus(status) {}
// returns a list (array) of all tasks where a status (is equal to the status) passes as an arguement

function addTask(task) {}
// add a task to existing task list (array)
